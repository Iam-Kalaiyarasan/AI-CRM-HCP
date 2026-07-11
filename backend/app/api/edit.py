from fastapi import APIRouter, HTTPException
from pydantic import BaseModel
from app.database.database import get_connection

router = APIRouter()


class EditInteraction(BaseModel):
    hcp_name: str
    interaction_type: str
    interaction_date: str
    interaction_time: str
    attendees: str
    topics: str
    voice_summary: str
    materials: str
    samples: str
    sentiment: str
    outcomes: str
    followup: str


@router.put("/interactions/{interaction_id}")
def update_interaction(interaction_id: int, data: EditInteraction):

    conn = get_connection()
    cursor = conn.cursor()

    query = """
    UPDATE interactions
    SET
        hcp_name=%s,
        interaction_type=%s,
        interaction_date=%s,
        interaction_time=%s,
        attendees=%s,
        topics=%s,
        voice_summary=%s,
        materials=%s,
        samples=%s,
        sentiment=%s,
        outcomes=%s,
        followup=%s
    WHERE id=%s
    """

    values = (
        data.hcp_name,
        data.interaction_type,
        data.interaction_date,
        data.interaction_time,
        data.attendees,
        data.topics,
        data.voice_summary,
        data.materials,
        data.samples,
        data.sentiment,
        data.outcomes,
        data.followup,
        interaction_id
    )

    cursor.execute(query, values)
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