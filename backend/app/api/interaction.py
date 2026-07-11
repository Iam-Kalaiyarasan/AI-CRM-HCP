from fastapi import APIRouter
from pydantic import BaseModel
from app.database.database import get_connection

router = APIRouter()


class InteractionRequest(BaseModel):
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


@router.post("/interactions")
def create_interaction(data: InteractionRequest):

    conn = get_connection()
    cursor = conn.cursor()

    query = """
    INSERT INTO interactions
    (
        hcp_name,
        interaction_type,
        interaction_date,
        interaction_time,
        attendees,
        topics,
        voice_summary,
        materials,
        samples,
        sentiment,
        outcomes,
        followup
    )
    VALUES
    (%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s)
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
    )

    cursor.execute(query, values)
    conn.commit()

    cursor.close()
    conn.close()

    return {
        "message": "Interaction Saved Successfully"
    }