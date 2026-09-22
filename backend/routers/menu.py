from typing import Optional, List
from fastapi import APIRouter, HTTPException, status
from pydantic import BaseModel, Field
from bson import ObjectId

from database import get_menu_collection

router = APIRouter(prefix="/api/menu", tags=["Menu Items"])

class MenuItemModel(BaseModel):
    id: Optional[str] = None
    name: str
    category: str
    price: str
    numericPrice: Optional[float] = None
    timing: Optional[str] = "All Day"
    tagline: Optional[str] = ""
    description: Optional[str] = ""
    image: Optional[str] = "/images/food/default.jpg"
    isVeg: bool = True
    ingredients: List[str] = []
    inStock: bool = True

@router.get("")
def list_menu_items(category: Optional[str] = None, search: Optional[str] = None):
    try:
        col = get_menu_collection()
        query = {}
        if category and category != "All":
            query["category"] = category
        if search:
            query["$or"] = [
                {"name": {"$regex": search, "$options": "i"}},
                {"description": {"$regex": search, "$options": "i"}}
            ]
        cursor = col.find(query).limit(100)
        items = []
        for d in cursor:
            d["_id"] = str(d["_id"])
            items.append(d)
        return {"total": len(items), "items": items}
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

@router.post("", status_code=status.HTTP_201_CREATED)
def create_menu_item(item: MenuItemModel):
    try:
        col = get_menu_collection()
        doc = item.model_dump(exclude={"id"})
        result = col.insert_one(doc)
        doc["_id"] = str(result.inserted_id)
        return {"success": True, "item": doc}
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))
