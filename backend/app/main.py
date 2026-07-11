from fastapi import FastAPI
from app.database.database import get_connection
from app.api.interaction import router as interaction_router
from app.api.ai import router as ai_router
from fastapi.middleware.cors import CORSMiddleware
from app.api.search import router as search_router
from app.api.edit import router as edit_router
from app.api.summary import router as summary_router
from app.api.recent import router as recent_router


app = FastAPI(
    title="AI First CRM",
    version="1.0"
)
app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "http://localhost:5173",
        "http://127.0.0.1:5173"
    ],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(interaction_router)
app.include_router(ai_router)
app.include_router(search_router)
app.include_router(edit_router)
app.include_router(summary_router)
app.include_router(recent_router)


@app.get("/")
def home():
    return {
        "message": "Backend Running Successfully 🚀"
    }


@app.get("/test-db")
def test_db():

    conn = get_connection()

    cursor = conn.cursor()

    cursor.execute("SELECT DATABASE();")

    database = cursor.fetchone()

    cursor.close()
    conn.close()

    return {
        "database": database
    }