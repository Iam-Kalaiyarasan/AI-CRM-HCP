import Navbar from "../components/Navbar";
import SearchTable from "../components/SearchTable";
import API from "../services/api";
import { useState } from "react";

export default function Search() {

    const [name, setName] = useState("");
    const [data, setData] = useState([]);

    const search = async () => {

        try {

            const res = await API.get(`/search?hcp_name=${name}`);

            setData(res.data);

        } catch (err) {

            console.log(err);

            alert("Search Failed");

        }

    };

    const editInteraction = async (item) => {

    try {

        await API.put(`/edit/${item.id}`, {
            voice_summary: "Updated from CRM"
        });

        alert("Interaction Updated Successfully");

        search();

    } catch (err) {

        console.error(err);

        alert("Update Failed");

    }

};

    return (

        <>
            <Navbar />

            <div className="container">

                <h1>Search Interaction</h1>

                <input
                    placeholder="Doctor Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />

                <button onClick={search}>
                    Search
                </button>

                <SearchTable
                    data={data}
                    onEdit={editInteraction}
                />

            </div>

        </>

    );

}