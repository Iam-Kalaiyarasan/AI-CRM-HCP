from app.services.ai_service import analyze_interaction


def log_interaction_tool(text: str):
    return analyze_interaction(text)