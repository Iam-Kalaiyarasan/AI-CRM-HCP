import Navbar from "../components/Navbar";
import SearchTable from "../components/SearchTable";
import API from "../services/api";
import { useState } from "react";

export default function Search() {

    const [name, setName] = useState("");

    const [data, setData] = useState([]);

    const search = async () => {

        const res = await API.get(`/search?hcp_name=${name}`);

        setData(res.data);

    };

    return (

        <>

            <Navbar />

            <div className="container">

                <h1>Search Interaction</h1>

                <input
                    placeholder="Doctor Name"
                    value={name}
                    onChange={(e)=>setName(e.target.value)}
                />

                <button onClick={search}>
                    Search
                </button>

                <SearchTable data={data} />

            </div>

        </>

    );

}