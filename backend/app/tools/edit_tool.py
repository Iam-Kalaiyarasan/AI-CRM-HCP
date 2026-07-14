from langchain_core.tools import tool
from app.database.database import get_connection


@tool
def edit_tool(id: int, summary: str):

    conn = get_connection()

    cursor = conn.cursor()

    cursor.execute(
        """
        UPDATE interactions
        SET voice_summary=%s
        WHERE id=%s
        """,
        (summary, id)
    )

    conn.commit()

    cursor.close()
    conn.close()

    return "Interaction Updated Successfully"