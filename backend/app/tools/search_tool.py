from langchain_core.tools import tool
from app.database.database import get_connection


@tool
def search_tool(hcp_name: str):

    conn = get_connection()
    cursor = conn.cursor(dictionary=True)

    cursor.execute(
        "SELECT * FROM interactions WHERE hcp_name LIKE %s",
        ("%" + hcp_name + "%",)
    )

    data = cursor.fetchall()

    cursor.close()
    conn.close()

    return data