from typing import Optional, List, Dict, Any
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
    image: Optional[str] = "/images/menu/idli.png"
    isVeg: bool = True
    ingredients: List[str] = []
    features: Optional[List[str]] = ["100% Pure Veg", "Authentic Recipe", "Freshly Prepared"]
    inStock: bool = True

class StockToggleRequest(BaseModel):
    inStock: bool

def _get_item_filter(item_id: str) -> dict:
    if ObjectId.is_valid(item_id):
        return {"$or": [{"_id": ObjectId(item_id)}, {"id": item_id}]}
    return {"id": item_id}

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
                {"description": {"$regex": search, "$options": "i"}},
                {"tagline": {"$regex": search, "$options": "i"}}
            ]
        cursor = col.find(query)
        items = []
        for d in cursor:
            d["_id"] = str(d["_id"])
            if "id" not in d or not d["id"]:
                d["id"] = d["_id"]
            items.append(d)
        return {"total": len(items), "items": items}
    except Exception as e:
        raise HTTPException(
            status_code=status.HTTP_500_INTERNAL_SERVER_ERROR,
            detail=f"Failed to fetch menu items: {str(e)}"
        )

@router.post("", status_code=status.HTTP_201_CREATED)
def create_menu_item(item: MenuItemModel):
    try:
        col = get_menu_collection()
        doc = item.model_dump()
        if not doc.get("id"):
            doc["id"] = f"dish-{ObjectId()}"
        result = col.insert_one(doc)
        doc["_id"] = str(result.inserted_id)
        return {"success": True, "item": doc}
    except Exception as e:
        raise HTTPException(
            status_code=status.HTTP_500_INTERNAL_SERVER_ERROR,
            detail=f"Failed to create menu item: {str(e)}"
        )

@router.put("/{item_id}")
def update_menu_item(item_id: str, payload: Dict[str, Any]):
    try:
        col = get_menu_collection()
        payload.pop("_id", None)
        query = _get_item_filter(item_id)
        res = col.update_one(query, {"$set": payload})
        if res.matched_count == 0:
            # Fallback: insert if not found so admin edits are never lost
            payload["id"] = item_id
            col.insert_one(payload)
        updated = col.find_one(query)
        if updated:
            updated["_id"] = str(updated["_id"])
            if "id" not in updated:
                updated["id"] = updated["_id"]
        return {"success": True, "item": updated}
    except Exception as e:
        raise HTTPException(
            status_code=status.HTTP_400_BAD_REQUEST,
            detail=f"Failed to update menu item: {str(e)}"
        )

@router.patch("/{item_id}/stock")
def update_menu_item_stock(item_id: str, payload: StockToggleRequest):
    try:
        col = get_menu_collection()
        query = _get_item_filter(item_id)
        res = col.update_one(query, {"$set": {"inStock": payload.inStock}})
        if res.matched_count == 0:
            raise HTTPException(status_code=404, detail="Menu item not found.")
        return {"success": True, "id": item_id, "inStock": payload.inStock}
    except Exception as e:
        raise HTTPException(
            status_code=status.HTTP_400_BAD_REQUEST,
            detail=f"Failed to update stock status: {str(e)}"
        )

@router.delete("/{item_id}")
def delete_menu_item(item_id: str):
    try:
        col = get_menu_collection()
        query = _get_item_filter(item_id)
        res = col.delete_one(query)
        if res.deleted_count == 0:
            raise HTTPException(status_code=404, detail="Menu item not found.")
        return {"success": True, "id": item_id, "deleted": True}
    except Exception as e:
        raise HTTPException(
            status_code=status.HTTP_400_BAD_REQUEST,
            detail=f"Failed to delete menu item: {str(e)}"
        )
