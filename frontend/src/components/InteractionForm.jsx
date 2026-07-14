import API from "../services/api";
import { useFormContext } from "../context/FormContext";

export default function InteractionForm() {

    const { formData, setFormData } = useFormContext();

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

const saveInteraction = async () => {
    const payload = {
        ...formData,
        interaction_date: formData.interaction_date || new Date().toISOString().split("T")[0],
        interaction_time: formData.interaction_time || new Date().toTimeString().slice(0, 5)
    };

    try {
        const res = await API.post("/interactions", payload);
        alert("Saved Successfully");
    } catch (err) {
        console.error(err);
        alert("Save Failed");
    }
};

    return (

        <div className="card">

            <h2>📝 HCP Interaction</h2>

            <input
                type="text"
                name="hcp_name"
                placeholder="HCP Name"
                value={formData.hcp_name}
                onChange={handleChange}
            />

            <select
                name="interaction_type"
                value={formData.interaction_type}
                onChange={handleChange}
            >
                <option value="">Select Interaction Type</option>
                <option value="Meeting">Meeting</option>
                <option value="Call">Call</option>
                <option value="Email">Email</option>
            </select>

            <input
                type="date"
                name="interaction_date"
                value={formData.interaction_date}
                onChange={handleChange}
            />

            <input
                type="time"
                name="interaction_time"
                value={formData.interaction_time}
                onChange={handleChange}
            />

            <textarea
                name="attendees"
                placeholder="Attendees"
                value={formData.attendees}
                onChange={handleChange}
            />

            <textarea
                name="topics"
                placeholder="Topics"
                value={formData.topics}
                onChange={handleChange}
            />

            <textarea
                name="voice_summary"
                placeholder="Voice Summary"
                value={formData.voice_summary}
                onChange={handleChange}
            />

            <input
                type="text"
                name="materials"
                placeholder="Materials"
                value={formData.materials}
                onChange={handleChange}
            />

            <input
                type="text"
                name="samples"
                placeholder="Samples"
                value={formData.samples}
                onChange={handleChange}
            />

            <select
                name="sentiment"
                value={formData.sentiment}
                onChange={handleChange}
            >
                <option value="">Select Sentiment</option>
                <option value="Positive">Positive</option>
                <option value="Neutral">Neutral</option>
                <option value="Negative">Negative</option>
            </select>

            <textarea
                name="outcomes"
                placeholder="Outcomes"
                value={formData.outcomes}
                onChange={handleChange}
            />

            <textarea
                name="followup"
                placeholder="Follow Up"
                value={formData.followup}
                onChange={handleChange}
            />

            <button onClick={saveInteraction}>
                Save Interaction
            </button>

        </div>

    );

}