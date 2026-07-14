import { useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import API from "../services/api";

export default function EditInteraction() {

    const { state } = useLocation();
    const navigate = useNavigate();

    const [formData, setFormData] = useState(state);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const updateInteraction = async () => {

        try {

            await API.put(`/interactions/${formData.id}`, formData);

            alert("Interaction Updated Successfully");

            navigate("/search");

        } catch (err) {

            console.log(err);

            alert("Update Failed");

        }

    };

    return (

        <div className="container">

            <h1>Edit Interaction</h1>

            <input
                name="hcp_name"
                value={formData.hcp_name}
                onChange={handleChange}
            />

            <br /><br />

            <textarea
                name="voice_summary"
                value={formData.voice_summary}
                onChange={handleChange}
            />

            <br /><br />

            <button onClick={updateInteraction}>
                Update
            </button>

        </div>

    );

}