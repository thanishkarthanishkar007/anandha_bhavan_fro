from datetime import datetime, timezone
from typing import Optional
from fastapi import APIRouter, HTTPException, status
from pydantic import BaseModel, Field
from bson import ObjectId

from database import get_reservations_collection
from services.email_service import send_contact_notification

router = APIRouter(prefix="/api/reservations", tags=["Table Reservations"])

class ReservationCreate(BaseModel):
    customer_name: str = Field(..., min_length=2)
    phone: str = Field(..., min_length=5)
    email: Optional[str] = Field(default="")
    guests: int = Field(default=2, ge=1, le=50)
    date: str
    time_slot: str
    table_type: Optional[str] = Field(default="AC Dining")
    special_notes: Optional[str] = Field(default="")

class ReservationStatusUpdate(BaseModel):
    status: str = Field(..., description="Confirmed, Completed, Pending, or Cancelled")

@router.post("", status_code=status.HTTP_201_CREATED)
def create_reservation(payload: ReservationCreate):
    try:
        col = get_reservations_collection()
    except Exception as e:
        raise HTTPException(status_code=503, detail=f"Database error: {str(e)}")

    doc = {
        "customer_name": payload.customer_name.strip(),
        "phone": payload.phone.strip(),
        "email": payload.email.strip().lower() if payload.email else "",
        "guests": payload.guests,
        "date": payload.date.strip(),
        "time_slot": payload.time_slot.strip(),
        "table_type": payload.table_type,
        "special_notes": payload.special_notes,
        "status": "Pending",
        "created_at": datetime.now(timezone.utc).isoformat(),
        "booking_source": "Website Online"
    }

    result = col.insert_one(doc)
    doc_id = str(result.inserted_id)

    # If email is provided or for admin alert, trigger Resend
    send_contact_notification(
        name=doc["customer_name"],
        phone=doc["phone"],
        email=doc["email"] or "not_provided@customer.com",
        guests=f"{doc['guests']} Guests",
        date=doc["date"],
        time_slot=doc["time_slot"],
        special_requests=f"Table: {doc['table_type']} | Notes: {doc['special_notes']}",
        submission_id=doc_id
    )

    doc["_id"] = doc_id
    return {"success": True, "id": doc_id, "reservation": doc}

@router.get("")
def get_reservations(status_filter: Optional[str] = None):
    try:
        col = get_reservations_collection()
        query = {"status": status_filter} if status_filter else {}
        cursor = col.find(query).sort("created_at", -1)
        items = []
        for d in cursor:
            d["_id"] = str(d["_id"])
            items.append(d)
        return {"total": len(items), "items": items}
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

@router.patch("/{res_id}/status")
def update_reservation_status(res_id: str, payload: ReservationStatusUpdate):
    try:
        col = get_reservations_collection()
        res = col.update_one(
            {"_id": ObjectId(res_id)},
            {"$set": {"status": payload.status, "updated_at": datetime.now(timezone.utc).isoformat()}}
        )
        if res.matched_count == 0:
            raise HTTPException(status_code=404, detail="Reservation not found")
        return {"success": True, "id": res_id, "new_status": payload.status}
    except Exception as e:
        raise HTTPException(status_code=400, detail=str(e))

@router.delete("/{res_id}")
def delete_reservation(res_id: str):
    try:
        col = get_reservations_collection()
        res = col.delete_one({"_id": ObjectId(res_id)})
        if res.deleted_count == 0:
            raise HTTPException(status_code=404, detail="Reservation not found")
        return {"success": True, "id": res_id, "deleted": True}
    except Exception as e:
        raise HTTPException(status_code=400, detail=str(e))
