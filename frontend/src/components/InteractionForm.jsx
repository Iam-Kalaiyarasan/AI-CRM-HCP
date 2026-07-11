import API from "../services/api";
import { useFormContext } from "../context/FormContext";

export default function InteractionForm() {

  const { formData, setFormData } = useFormContext();
  console.log("FORM DATA:", formData);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const saveInteraction = async () => {
    try {
      const res = await API.post("/interactions", formData);
      alert(res.data.message);
    } catch (err) {
      console.log(err);
      alert("Failed to save interaction");
    }
  };

  return (
    <div className="card">

      <h2>📝 HCP Interaction</h2>
      <h3>{formData.hcp_name}</h3>

<h3>{formData.voice_summary}</h3>

<h3>{formData.sentiment}</h3>

      <input
        type="text"
        name="hcp_name"
        placeholder="HCP Name"
        value={formData.hcp_name}
        onChange={handleChange}
        style={{ width: "100%", padding: "10px" }}
      />

      <br /><br />

      <select
        name="interaction_type"
        value={formData.interaction_type}
        onChange={handleChange}
        style={{ width: "100%", padding: "10px" }}
      >
        <option value="">Select Interaction Type</option>
        <option value="Meeting">Meeting</option>
        <option value="Call">Call</option>
        <option value="Email">Email</option>
      </select>

      <br /><br />

      <input
        type="date"
        name="interaction_date"
        value={formData.interaction_date}
        onChange={handleChange}
        style={{ width: "100%", padding: "10px" }}
      />

      <br /><br />

      <input
        type="time"
        name="interaction_time"
        value={formData.interaction_time}
        onChange={handleChange}
        style={{ width: "100%", padding: "10px" }}
      />

      <br /><br />

      <textarea
        name="attendees"
        placeholder="Attendees"
        rows="2"
        value={formData.attendees}
        onChange={handleChange}
        style={{ width: "100%", padding: "10px" }}
      />

      <br /><br />

      <textarea
        name="topics"
        placeholder="Topics Discussed"
        rows="3"
        value={formData.topics}
        onChange={handleChange}
        style={{ width: "100%", padding: "10px" }}
      />

      <br /><br />

      <textarea
        name="voice_summary"
        placeholder="Voice Summary"
        rows="4"
        value={formData.voice_summary}
        onChange={handleChange}
        style={{ width: "100%", padding: "10px" }}
      />

      <br /><br />

      <input
        type="text"
        name="materials"
        placeholder="Materials Shared"
        value={formData.materials}
        onChange={handleChange}
        style={{ width: "100%", padding: "10px" }}
      />

      <br /><br />

      <input
        type="text"
        name="samples"
        placeholder="Samples Distributed"
        value={formData.samples}
        onChange={handleChange}
        style={{ width: "100%", padding: "10px" }}
      />

      <br /><br />

      <select
        name="sentiment"
        value={formData.sentiment}
        onChange={handleChange}
        style={{ width: "100%", padding: "10px" }}
      >
        <option value="">Select Sentiment</option>
        <option value="Positive">Positive</option>
        <option value="Neutral">Neutral</option>
        <option value="Negative">Negative</option>
      </select>

      <br /><br />

      <textarea
        name="outcomes"
        placeholder="Outcomes"
        rows="3"
        value={formData.outcomes}
        onChange={handleChange}
        style={{ width: "100%", padding: "10px" }}
      />

      <br /><br />

      <textarea
        name="followup"
        placeholder="Follow-up"
        rows="3"
        value={formData.followup}
        onChange={handleChange}
        style={{ width: "100%", padding: "10px" }}
      />

      <br /><br />

      <button
        onClick={saveInteraction}
        style={{
          width: "100%",
          padding: "12px",
          background: "#1976d2",
          color: "white",
          border: "none",
          cursor: "pointer",
          fontSize: "16px",
          borderRadius: "5px"
        }}
      >
        Save Interaction
      </button>

    </div>
  );
}