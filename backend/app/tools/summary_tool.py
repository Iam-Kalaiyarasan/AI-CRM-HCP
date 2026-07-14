from langchain_core.tools import tool
from app.database.database import get_connection


@tool
def summary_tool():
    """
    Returns dashboard summary statistics.
    """

    conn = get_connection()
    cursor = conn.cursor(dictionary=True)

    cursor.execute("SELECT COUNT(*) AS total FROM interactions")
    total = cursor.fetchone()["total"]

    cursor.execute(
        "SELECT COUNT(*) AS positive FROM interactions WHERE sentiment='Positive'"
    )
    positive = cursor.fetchone()["positive"]

    cursor.execute(
        "SELECT COUNT(*) AS neutral FROM interactions WHERE sentiment='Neutral'"
    )
    neutral = cursor.fetchone()["neutral"]

    cursor.execute(
        "SELECT COUNT(*) AS negative FROM interactions WHERE sentiment='Negative'"
    )
    negative = cursor.fetchone()["negative"]

    cursor.close()
    conn.close()

    return {
        "total_interactions": total,
        "positive": positive,
        "neutral": neutral,
        "negative": negative,
    }