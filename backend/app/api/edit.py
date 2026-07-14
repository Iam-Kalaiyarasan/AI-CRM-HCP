from fastapi import APIRouter, HTTPException
from pydantic import BaseModel
from app.database.database import get_connection

router = APIRouter()


class EditSummary(BaseModel):
    voice_summary: str


@router.put("/edit/{interaction_id}")
def update_summary(interaction_id: int, data: EditSummary):

    conn = get_connection()
    cursor = conn.cursor()

    cursor.execute(
        """
        UPDATE interactions
        SET voice_summary=%s
        WHERE id=%s
        """,
        (data.voice_summary, interaction_id)
    )

    conn.commit()

    if cursor.rowcount == 0:
        cursor.close()
        conn.close()
        raise HTTPException(status_code=404, detail="Interaction not found")

    cursor.close()
    conn.close()

    return {
        "message": "Interaction Updated Successfully"
    }