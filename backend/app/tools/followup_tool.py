from langchain_core.tools import tool


@tool
def followup_tool(text: str):

    if "next" in text.lower():
        return "Schedule Follow-up Meeting"

    if "sample" in text.lower():
        return "Send Product Samples"

    return "No Follow-up Required"