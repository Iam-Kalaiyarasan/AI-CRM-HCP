import { useEffect, useState } from "react";
import API from "../services/api";

export default function RecentInteractions() {

    const [data, setData] = useState([]);

    useEffect(() => {
        loadData();
    }, []);

    const loadData = async () => {

        try {

            const res = await API.get("/recent");

            setData(res.data);

        } catch (err) {

            console.log(err);

        }

    };

    return (

        <div className="card">

            <h2>📋 Recent Interactions</h2>

            <table className="table">

                <thead>

                    <tr>

                        <th>ID</th>
                        <th>Doctor</th>
                        <th>Type</th>
                        <th>Date</th>
                        <th>Sentiment</th>

                    </tr>

                </thead>

                <tbody>

                    {data.map((item) => (

                        <tr key={item.id}>

                            <td>{item.id}</td>
                            <td>{item.hcp_name}</td>
                            <td>{item.interaction_type}</td>
                            <td>{item.interaction_date}</td>
                            <td>{item.sentiment}</td>

                        </tr>

                    ))}

                </tbody>

            </table>

        </div>

    );

}