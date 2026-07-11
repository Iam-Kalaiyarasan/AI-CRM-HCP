from fastapi import APIRouter
from app.database.database import get_connection

router = APIRouter()


@router.get("/recent")
def recent_interactions():

    conn = get_connection()
    cursor = conn.cursor(dictionary=True)

    cursor.execute("""
        SELECT
            id,
            hcp_name,
            interaction_type,
            interaction_date,
            sentiment
        FROM interactions
        ORDER BY id DESC
        LIMIT 5
    """)

    data = cursor.fetchall()

    cursor.close()
    conn.close()

    return data