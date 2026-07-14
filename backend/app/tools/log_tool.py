from datetime import datetime

def log_interaction_tool(action: str):

    log = {
        "timestamp": datetime.now().strftime("%Y-%m-%d %H:%M:%S"),
        "action": action,
        "status": "Success"
    }

    print(log)

    return log