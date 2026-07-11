import { useState } from "react";
import API from "../services/api";
import { useFormContext } from "../context/FormContext";

export default function AIAssistant() {

    const [text, setText] = useState("");

    const { setFormData } = useFormContext();

    const analyze = async () => {

    console.log("Button clicked");

    if (!text.trim()) {
        alert("Please enter interaction details.");
        return;
    }

    try {

        console.log("Sending request...");

        const res = await API.post("/ai", {
            text: text
        });

        console.log("Response:", res.data);

        setFormData(prev => ({
            ...prev,
            hcp_name: res.data.hcp_name || "",
            interaction_type:
                res.data.interaction_type === "In-person meeting"
                    ? "Meeting"
                    : res.data.interaction_type || "",
            voice_summary: res.data.summary || "",
            sentiment: res.data.sentiment || "",
            followup: res.data.followup || ""
        }));

        alert("AI Analysis Completed Successfully!");

    } catch (err) {

        console.error(err);

        alert("AI Analysis Failed");

    }

};

    return (

        <div className="card">

            <h2>🤖 AI Assistant</h2>

            <textarea

                rows="12"

                style={{
                    width: "100%",
                    padding: "10px",
                    borderRadius: "5px"
                }}

                placeholder="Example:
Met Dr. Ravi today.
Discussed Diabetes medicine.
Doctor liked brochure.
Asked another meeting next week."

                value={text}

                onChange={(e)=>setText(e.target.value)}

            />

            <br/><br/>

            <button

                onClick={analyze}

                style={{
                    width:"100%",
                    padding:"12px",
                    background:"#1976d2",
                    color:"white",
                    border:"none",
                    borderRadius:"5px",
                    cursor:"pointer"
                }}

            >

                Analyze with AI

            </button>

        </div>

    );

}