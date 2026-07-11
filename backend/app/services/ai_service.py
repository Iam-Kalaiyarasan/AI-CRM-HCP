from groq import Groq
import os
from dotenv import load_dotenv

load_dotenv()

client = Groq(
    api_key=os.getenv("GROQ_API_KEY")
)


def analyze_interaction(text: str):

    prompt = f"""
You are an AI Healthcare CRM Assistant.

Analyze this doctor interaction.

Return ONLY JSON.

Interaction:
{text}

Format:

{{
"hcp_name":"",
"interaction_type":"",
"summary":"",
"sentiment":"",
"followup":""
}}
"""

    response = client.chat.completions.create(
        model="llama-3.3-70b-versatile",
        messages=[
            {
                "role": "user",
                "content": prompt
            }
        ]
    )

    return response.choices[0].message.content