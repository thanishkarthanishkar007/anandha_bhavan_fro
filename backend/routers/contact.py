from datetime import datetime, timezone
from typing import Optional
from fastapi import APIRouter, HTTPException, status
from pydantic import BaseModel, Field
from bson import ObjectId

from database import get_contact_collection
from services.email_service import send_contact_notification

router = APIRouter(prefix="/api/contact", tags=["Contact & Enquiries"])

class ContactSubmissionRequest(BaseModel):
    name: str = Field(..., min_length=2, description="Customer full name")
    phone: str = Field(..., min_length=5, description="Contact phone or mobile number")
    email: str = Field(..., description="Customer email address")
    guests: str = Field(default="2 Guests", description="Number of guests or party size")
    date: str = Field(..., description="Preferred reservation/dining date")
    timeSlot: Optional[str] = Field(default="", description="Preferred meal session or time slot")
    time_slot: Optional[str] = Field(default="", description="Alternative field for timeSlot")
    specialRequests: Optional[str] = Field(default="", description="Special dietary or seating requests")
    special_requests: Optional[str] = Field(default="", description="Alternative field for specialRequests")

class ContactSubmissionResponse(BaseModel):
    success: bool
    id: str
    message: str
    email_status: str
    resend_id: Optional[str] = None
    created_at: str

@router.post("", response_model=ContactSubmissionResponse, status_code=status.HTTP_201_CREATED)
def submit_contact_form(payload: ContactSubmissionRequest):
    """
    Submits a contact / table booking inquiry:
    1. Persists the inquiry into MongoDB Atlas collection 'contact_submissions'.
    2. Sends a formatted notification email to srenewaanandabavan@gmail.com via Resend API.
    3. Records email delivery status in MongoDB.
    """
    try:
        col = get_contact_collection()
    except Exception as e:
        raise HTTPException(
            status_code=status.HTTP_503_SERVICE_UNAVAILABLE,
            detail=f"Database connection error: {str(e)}"
        )

    # Normalize fields
    session_time = payload.timeSlot or payload.time_slot or ""
    dietary_notes = payload.specialRequests or payload.special_requests or ""
    now_iso = datetime.now(timezone.utc).isoformat()

    doc = {
        "name": payload.name.strip(),
        "phone": payload.phone.strip(),
        "email": payload.email.strip().lower(),
        "guests": payload.guests.strip(),
        "date": payload.date.strip(),
        "time_slot": session_time.strip(),
        "special_requests": dietary_notes.strip(),
        "created_at": now_iso,
        "email_status": "pending",
        "resend_id": None,
        "status": "new"
    }

    # 1. Insert into MongoDB Atlas
    try:
        insert_result = col.insert_one(doc)
        submission_id = str(insert_result.inserted_id)
    except Exception as e:
        raise HTTPException(
            status_code=status.HTTP_500_INTERNAL_SERVER_ERROR,
            detail=f"Failed to save inquiry to MongoDB Atlas: {str(e)}"
        )

    # 2. Dispatch Email via Resend API
    email_result = send_contact_notification(
        name=doc["name"],
        phone=doc["phone"],
        email=doc["email"],
        guests=doc["guests"],
        date=doc["date"],
        time_slot=doc["time_slot"],
        special_requests=doc["special_requests"],
        submission_id=submission_id
    )

    # 3. Update status in MongoDB
    try:
        col.update_one(
            {"_id": insert_result.inserted_id},
            {
                "$set": {
                    "email_status": email_result["status"],
                    "resend_id": email_result["resend_id"],
                    "email_error": email_result.get("error")
                }
            }
        )
    except Exception as e:
        # Log but do not block the response
        pass

    return ContactSubmissionResponse(
        success=True,
        id=submission_id,
        message="Thank you! Your enquiry has been received and our team has been notified via email.",
        email_status=email_result["status"],
        resend_id=email_result["resend_id"],
        created_at=now_iso
    )

@router.get("")
def list_contact_submissions(limit: int = 50, skip: int = 0):
    """
    Returns contact enquiries stored in MongoDB Atlas, sorted newest first.
    """
    try:
        col = get_contact_collection()
        cursor = col.find().sort("created_at", -1).skip(skip).limit(limit)
        items = []
        for doc in cursor:
            doc["_id"] = str(doc["_id"])
            items.append(doc)
        return {"total": col.count_documents({}), "items": items}
    except Exception as e:
        raise HTTPException(
            status_code=status.HTTP_500_INTERNAL_SERVER_ERROR,
            detail=f"Failed to fetch inquiries from MongoDB Atlas: {str(e)}"
        )

@router.get("/{submission_id}")
def get_contact_submission(submission_id: str):
    """
    Fetches a specific inquiry by ID.
    """
    try:
        col = get_contact_collection()
        doc = col.find_one({"_id": ObjectId(submission_id)})
        if not doc:
            raise HTTPException(status_code=404, detail="Inquiry not found")
        doc["_id"] = str(doc["_id"])
        return doc
    except Exception as e:
        raise HTTPException(status_code=400, detail=f"Invalid ID or query error: {str(e)}")
