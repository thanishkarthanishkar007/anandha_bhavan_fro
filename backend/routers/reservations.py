import logging
from datetime import datetime, timezone
from typing import Optional
from fastapi import APIRouter, HTTPException, BackgroundTasks, status
from pydantic import BaseModel, Field
from bson import ObjectId

from database import get_reservations_collection
from services.email_service import send_contact_notification

logger = logging.getLogger(__name__)

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

def _send_reservation_alert_bg(
    customer_name: str,
    phone: str,
    email: str,
    guests: str,
    date: str,
    time_slot: str,
    special_requests: str,
    submission_id: str
):
    try:
        send_contact_notification(
            name=customer_name,
            phone=phone,
            email=email,
            guests=guests,
            date=date,
            time_slot=time_slot,
            special_requests=special_requests,
            submission_id=submission_id
        )
    except Exception as e:
        logger.error(f"Background reservation notification error for {submission_id}: {e}")

@router.post("", status_code=status.HTTP_201_CREATED)
def create_reservation(payload: ReservationCreate, background_tasks: BackgroundTasks):
    try:
        col = get_reservations_collection()
    except Exception as e:
        raise HTTPException(status_code=503, detail=f"Database error: {str(e)}")

    # Check for duplicate submission within 30 seconds
    try:
        dup = col.find_one({
            "phone": payload.phone.strip(),
            "date": payload.date.strip(),
            "customer_name": payload.customer_name.strip()
        }, sort=[("created_at", -1)])
        if dup and "created_at" in dup:
            prev_time = datetime.fromisoformat(dup["created_at"])
            if (datetime.now(timezone.utc) - prev_time).total_seconds() < 30:
                dup["_id"] = str(dup["_id"])
                return {"success": True, "id": dup["_id"], "reservation": dup}
    except Exception:
        pass

    now_iso = datetime.now(timezone.utc).isoformat()
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
        "created_at": now_iso,
        "booking_source": "Website Online"
    }

    result = col.insert_one(doc)
    doc_id = str(result.inserted_id)

    # Dispatch email alert asynchronously in background
    background_tasks.add_task(
        _send_reservation_alert_bg,
        customer_name=doc["customer_name"],
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
def get_reservations(status_filter: Optional[str] = None, limit: int = 100, skip: int = 0):
    try:
        col = get_reservations_collection()
        query = {"status": status_filter} if status_filter else {}
        total = col.count_documents(query)
        cursor = col.find(query).sort("created_at", -1).skip(skip).limit(limit)
        items = []
        for d in cursor:
            d["_id"] = str(d["_id"])
            items.append(d)
        return {"total": total, "items": items}
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
