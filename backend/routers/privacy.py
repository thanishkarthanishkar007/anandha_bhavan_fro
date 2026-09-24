import random
from datetime import datetime, timezone
from typing import Optional
from fastapi import APIRouter, HTTPException, status
from pydantic import BaseModel, Field
from bson import ObjectId

from database import get_privacy_collection

router = APIRouter(prefix="/api/privacy", tags=["DPDP Privacy Requests"])

class PrivacyRequestPayload(BaseModel):
    requestType: Optional[str] = Field(default=None, description="DPDP request type")
    request_type: Optional[str] = Field(default=None, description="Alternative field for requestType")
    requestTitle: Optional[str] = Field(default=None, description="Display title for request")
    request_title: Optional[str] = Field(default=None, description="Alternative field for requestTitle")
    name: str = Field(..., min_length=2, description="Data Principal full name")
    email: str = Field(..., description="Data Principal email address")
    phone: str = Field(..., min_length=5, description="Contact phone or mobile number")
    details: str = Field(..., min_length=5, description="Specific details of the privacy request")

class PrivacyStatusUpdatePayload(BaseModel):
    status: str = Field(..., description="New status: pending, in_progress, resolved, rejected")
    resolution_notes: Optional[str] = Field(default=None, description="Notes on resolution or actions taken")

@router.post("/request", status_code=status.HTTP_201_CREATED)
def submit_privacy_request(payload: PrivacyRequestPayload):
    """
    Submits a statutory DPDP request (View Data, Correct Data, Erasure, Withdraw Consent, Privacy Grievance).
    Generates a tracking reference ID and records the request in MongoDB Atlas collection 'privacy_requests'.
    """
    req_type = payload.requestType or payload.request_type or "general_request"
    req_title = payload.requestTitle or payload.request_title or req_type.replace("_", " ").title()

    year = datetime.now().year
    ref_code = random.randint(10000, 99999)
    reference_id = f"DPDP-{year}-{ref_code}"
    now_iso = datetime.now(timezone.utc).isoformat()

    doc = {
        "reference_id": reference_id,
        "request_type": req_type,
        "request_title": req_title,
        "name": payload.name.strip(),
        "email": payload.email.strip().lower(),
        "phone": payload.phone.strip(),
        "details": payload.details.strip(),
        "status": "pending",
        "resolution_notes": None,
        "created_at": now_iso,
        "resolved_at": None,
    }

    try:
        col = get_privacy_collection()
        insert_result = col.insert_one(doc)
        doc_id = str(insert_result.inserted_id)
    except Exception as e:
        raise HTTPException(
            status_code=status.HTTP_500_INTERNAL_SERVER_ERROR,
            detail=f"Failed to record DPDP privacy request: {str(e)}"
        )

    return {
        "success": True,
        "id": doc_id,
        "referenceId": reference_id,
        "reference_id": reference_id,
        "message": f"Your {req_title} request has been recorded under reference ID {reference_id}. Our Data Protection Officer will review and respond within 30 days as per DPDP Act, 2023.",
        "created_at": now_iso,
    }

@router.get("/requests")
def list_privacy_requests(limit: int = 50, skip: int = 0):
    """
    Retrieves all submitted DPDP privacy requests, sorted newest first.
    """
    try:
        col = get_privacy_collection()
        cursor = col.find().sort("created_at", -1).skip(skip).limit(limit)
        items = []
        for doc in cursor:
            doc["_id"] = str(doc["_id"])
            items.append(doc)
        return {
            "total": col.count_documents({}),
            "items": items,
        }
    except Exception as e:
        raise HTTPException(
            status_code=status.HTTP_500_INTERNAL_SERVER_ERROR,
            detail=f"Failed to fetch privacy requests: {str(e)}"
        )

@router.patch("/requests/{request_id}")
def update_privacy_request_status(request_id: str, payload: PrivacyStatusUpdatePayload):
    """
    Updates the resolution status or administrative notes for a DPDP request.
    """
    try:
        col = get_privacy_collection()
        update_fields = {
            "status": payload.status,
            "resolution_notes": payload.resolution_notes,
        }
        if payload.status == "resolved":
            update_fields["resolved_at"] = datetime.now(timezone.utc).isoformat()

        res = col.update_one(
            {"_id": ObjectId(request_id)},
            {"$set": update_fields}
        )
        if res.matched_count == 0:
            raise HTTPException(status_code=404, detail="Privacy request not found")

        return {"success": True, "id": request_id, "updated": True}
    except HTTPException:
        raise
    except Exception as e:
        raise HTTPException(status_code=400, detail=f"Failed to update request: {str(e)}")
