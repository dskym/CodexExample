from fastapi import APIRouter

router = APIRouter()


@router.get("/health")
async def health_check():
    """헬스 체크 엔드포인트"""
    return {
        "status": "healthy",
        "message": "API is running"
    }
