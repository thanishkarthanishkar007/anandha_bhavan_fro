from datetime import datetime, timezone
from typing import Optional, Dict, Any
from fastapi import APIRouter, HTTPException, status
from pydantic import BaseModel, Field

from database import get_settings_collection

router = APIRouter(prefix="/api/settings", tags=["Restaurant Settings"])

class RestaurantSettingsModel(BaseModel):
    name: Optional[str] = "Sre New Aananda Bavan"
    tagline: Optional[str] = "Pure Veg A/C Restaurant"
    subTagline: Optional[str] = "Pure Vegetarian Family Restaurant"
    logo: Optional[str] = "/images/navbar-logo.png"
    brandImage: Optional[str] = "/images/navbar-brand.png"
    address: Optional[str] = "Bangalore to Salem Byepass, NH 44, opposite to Government Higher Secondary School, Poosaripatty, Omalur, Salem, Tamil Nadu 636305"
    landmark: Optional[str] = "Opposite to Government Higher Secondary School, Poosaripatty"
    phone: Optional[str] = "63833 12948"
    phoneRaw: Optional[str] = "+916383312948"
    whatsapp: Optional[str] = "86755 35555"
    whatsappRaw: Optional[str] = "+918675535555"
    email: Optional[str] = "srenewaanandabavan@gmail.com"
    operatingHours: Optional[str] = "06:30 AM – 10:45 PM (All 7 Days)"
    mornTiffin: Optional[str] = "06:30 AM – 11:30 AM"
    royalLunch: Optional[str] = "12:00 PM – 03:30 PM"
    dinnerTiffin: Optional[str] = "05:30 PM – 10:30 PM"
    mapsEmbedUrl: Optional[str] = "https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d2017.8807760691552!2d78.0664093377075!3d11.845825643645435!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2s!5e1!3m2!1sen!2sin!4v1789711781336!5m2!1sen!2sin"
    instagramUrl: Optional[str] = "https://www.instagram.com/srenewaanandabavan?stkn=N29pdGxkcnAxdjc3"
    facebookUrl: Optional[str] = "https://www.facebook.com/profile.php?id=61594584594104"
    youtubeUrl: Optional[str] = "http://www.youtube.com/@SreNewAanandaBavan"

SETTINGS_DOC_ID = "global_restaurant_settings"

@router.get("")
def get_restaurant_settings():
    try:
        col = get_settings_collection()
        doc = col.find_one({"_id": SETTINGS_DOC_ID})
        if not doc:
            # Fallback default
            default_model = RestaurantSettingsModel()
            return default_model.model_dump()
        doc["_id"] = str(doc["_id"])
        return doc
    except Exception as e:
        raise HTTPException(
            status_code=status.HTTP_500_INTERNAL_SERVER_ERROR,
            detail=f"Failed to fetch restaurant settings: {str(e)}"
        )

@router.put("")
def update_restaurant_settings(payload: Dict[str, Any]):
    try:
        col = get_settings_collection()
        payload.pop("_id", None)
        payload["updated_at"] = datetime.now(timezone.utc).isoformat()
        col.update_one(
            {"_id": SETTINGS_DOC_ID},
            {"$set": payload},
            upsert=True
        )
        updated_doc = col.find_one({"_id": SETTINGS_DOC_ID})
        updated_doc["_id"] = str(updated_doc["_id"])
        return {"success": True, "settings": updated_doc}
    except Exception as e:
        raise HTTPException(
            status_code=status.HTTP_500_INTERNAL_SERVER_ERROR,
            detail=f"Failed to update restaurant settings: {str(e)}"
        )
