from fastapi import APIRouter
from app.database.database import get_connection

router = APIRouter()


@router.get("/summary")
def get_summary():

    conn = get_connection()
    cursor = conn.cursor(dictionary=True)

    # Total interactions
    cursor.execute("SELECT COUNT(*) AS total FROM interactions")
    total = cursor.fetchone()["total"]

    # Positive
    cursor.execute("SELECT COUNT(*) AS positive FROM interactions WHERE sentiment='Positive'")
    positive = cursor.fetchone()["positive"]

    # Neutral
    cursor.execute("SELECT COUNT(*) AS neutral FROM interactions WHERE sentiment='Neutral'")
    neutral = cursor.fetchone()["neutral"]

    # Negative
    cursor.execute("SELECT COUNT(*) AS negative FROM interactions WHERE sentiment='Negative'")
    negative = cursor.fetchone()["negative"]

    # Recent 5 interactions
    cursor.execute("""
        SELECT id,
               hcp_name,
               interaction_type,
               interaction_date,
               sentiment
        FROM interactions
        ORDER BY id DESC
        LIMIT 5
    """)

    recent = cursor.fetchall()

    cursor.close()
    conn.close()

    return {
        "total_interactions": total,
        "positive": positive,
        "neutral": neutral,
        "negative": negative,
        "recent_interactions": recent
    }