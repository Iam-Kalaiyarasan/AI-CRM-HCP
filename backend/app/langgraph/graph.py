from langgraph.graph import StateGraph, END
from typing import TypedDict
from app.tools.log_tool import log_interaction_tool


class GraphState(TypedDict):
    text: str
    result: str


def log_node(state):
    state["result"] = log_interaction_tool(state["text"])
    return state


builder = StateGraph(GraphState)

builder.add_node("log", log_node)

builder.set_entry_point("log")

builder.add_edge("log", END)

graph = builder.compile()