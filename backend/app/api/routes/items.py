from fastapi import APIRouter, HTTPException
from typing import List
from app.schemas.item import Item, ItemCreate, ItemUpdate

router = APIRouter()

# 임시 인메모리 저장소 (실제로는 DB 사용)
items_db = []


@router.get("/items", response_model=List[Item])
async def get_items():
    """모든 아이템 조회"""
    return items_db


@router.get("/items/{item_id}", response_model=Item)
async def get_item(item_id: int):
    """특정 아이템 조회"""
    for item in items_db:
        if item["id"] == item_id:
            return item
    raise HTTPException(status_code=404, detail="Item not found")


@router.post("/items", response_model=Item, status_code=201)
async def create_item(item: ItemCreate):
    """새 아이템 생성"""
    new_item = {
        "id": len(items_db) + 1,
        **item.model_dump()
    }
    items_db.append(new_item)
    return new_item


@router.put("/items/{item_id}", response_model=Item)
async def update_item(item_id: int, item: ItemUpdate):
    """아이템 수정"""
    for idx, db_item in enumerate(items_db):
        if db_item["id"] == item_id:
            updated_item = {**db_item, **item.model_dump(exclude_unset=True)}
            items_db[idx] = updated_item
            return updated_item
    raise HTTPException(status_code=404, detail="Item not found")


@router.delete("/items/{item_id}")
async def delete_item(item_id: int):
    """아이템 삭제"""
    for idx, item in enumerate(items_db):
        if item["id"] == item_id:
            items_db.pop(idx)
            return {"message": "Item deleted successfully"}
    raise HTTPException(status_code=404, detail="Item not found")
