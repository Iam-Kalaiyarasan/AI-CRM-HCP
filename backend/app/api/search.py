from fastapi import APIRouter
from app.database.database import get_connection

router = APIRouter()


@router.get("/search")
def search_interactions(hcp_name: str = ""):

    conn = get_connection()
    cursor = conn.cursor(dictionary=True)

    query = """
        SELECT *
        FROM interactions
        WHERE hcp_name LIKE %s
        ORDER BY id DESC
    """

    cursor.execute(query, (f"%{hcp_name}%",))

    data = cursor.fetchall()

    cursor.close()
    conn.close()

    return data