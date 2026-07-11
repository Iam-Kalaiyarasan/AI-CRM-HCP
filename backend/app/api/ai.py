from fastapi import APIRouter
from pydantic import BaseModel
from app.langgraph.graph import graph
import json

router = APIRouter()


class Prompt(BaseModel):
    text: str


@router.post("/ai")
def ask_ai(data: Prompt):

    result = graph.invoke(
        {
            "text": data.text
        }
    )

    ai_result = result["result"]

    # Remove markdown code block if present
    ai_result = ai_result.replace("```json", "").replace("```", "").strip()

    try:
        ai_result = json.loads(ai_result)
    except Exception:
        pass

    return ai_result