from langgraph.graph import StateGraph, END
from typing import TypedDict
from app.services.ai_service import analyze_interaction

class GraphState(TypedDict):
    text: str
    result: str

def ai_node(state):
    state["result"] = analyze_interaction(state["text"])
    return state

builder = StateGraph(GraphState)
builder.add_node("ai", ai_node)
builder.set_entry_point("ai")
builder.add_edge("ai", END)

graph = builder.compile()