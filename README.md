# CodexExample

React + TypeScript 프론트엔드와 FastAPI 백엔드로 구성된 풀스택 프로젝트입니다.

## 프로젝트 구조

```
CodexExample/
├── backend/           # FastAPI 백엔드
│   ├── app/
│   │   ├── api/      # API 라우트
│   │   ├── core/     # 설정 파일
│   │   ├── models/   # 데이터베이스 모델
│   │   └── schemas/  # Pydantic 스키마
│   ├── requirements.txt
│   └── run.py
└── frontend/         # React + TypeScript 프론트엔드
    ├── src/
    │   ├── components/
    │   ├── pages/
    │   ├── services/  # API 서비스
    │   └── types/     # TypeScript 타입
    ├── package.json
    └── vite.config.ts
```

## 기술 스택

### 백엔드
- **FastAPI**: 고성능 Python 웹 프레임워크
- **Pydantic**: 데이터 검증
- **Uvicorn**: ASGI 서버
- **SQLAlchemy**: ORM (준비됨)

### 프론트엔드
- **React 18**: UI 라이브러리
- **TypeScript**: 타입 안정성
- **Vite**: 빌드 도구
- **React Router**: 라우팅
- **Axios**: HTTP 클라이언트

## 설치 및 실행

### 백엔드 설정

1. 백엔드 디렉토리로 이동:
```bash
cd backend
```

2. Python 가상환경 생성 및 활성화:
```bash
python -m venv venv

# Windows
venv\Scripts\activate

# macOS/Linux
source venv/bin/activate
```

3. 의존성 설치:
```bash
pip install -r requirements.txt
```

4. 환경 변수 설정:
```bash
cp .env.example .env
# .env 파일을 편집하여 필요한 설정 변경
```

5. 서버 실행:
```bash
python run.py
```

백엔드 서버가 `http://localhost:8000`에서 실행됩니다.

- API 문서: http://localhost:8000/docs
- API 대체 문서: http://localhost:8000/redoc

### 프론트엔드 설정

1. 프론트엔드 디렉토리로 이동:
```bash
cd frontend
```

2. 의존성 설치:
```bash
npm install
# 또는
yarn install
```

3. 개발 서버 실행:
```bash
npm run dev
# 또는
yarn dev
```

프론트엔드가 `http://localhost:3000`에서 실행됩니다.

## API 엔드포인트

### Health Check
- `GET /api/v1/health` - API 상태 확인

### Items
- `GET /api/v1/items` - 모든 아이템 조회
- `GET /api/v1/items/{item_id}` - 특정 아이템 조회
- `POST /api/v1/items` - 새 아이템 생성
- `PUT /api/v1/items/{item_id}` - 아이템 수정
- `DELETE /api/v1/items/{item_id}` - 아이템 삭제

## 개발 가이드

### 백엔드에 새 엔드포인트 추가

1. `backend/app/schemas/`에 Pydantic 스키마 정의
2. `backend/app/api/routes/`에 라우터 추가
3. `backend/app/main.py`에 라우터 등록

### 프론트엔드에 새 페이지 추가

1. `frontend/src/types/`에 TypeScript 타입 정의
2. `frontend/src/services/`에 API 서비스 함수 추가
3. `frontend/src/pages/`에 컴포넌트 생성
4. `frontend/src/App.tsx`에 라우트 추가

## 빌드

### 프론트엔드 프로덕션 빌드
```bash
cd frontend
npm run build
```

빌드된 파일은 `frontend/dist/` 디렉토리에 생성됩니다.

## 주의사항

- 백엔드는 기본적으로 인메모리 저장소를 사용합니다. 실제 데이터베이스를 사용하려면 `backend/app/models/`에 SQLAlchemy 모델을 정의하고 데이터베이스를 연결하세요.
- 프로덕션 환경에서는 `.env` 파일의 `SECRET_KEY`를 반드시 변경하세요.
- CORS 설정은 개발 환경에 맞춰져 있습니다. 프로덕션 환경에서는 적절히 조정하세요.

## 라이선스

MIT
