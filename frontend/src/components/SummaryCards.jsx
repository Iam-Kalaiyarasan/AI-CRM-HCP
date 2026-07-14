import { useEffect, useState } from "react";
import API from "../services/api";

export default function SummaryCards() {

    const [summary, setSummary] = useState(null);

    useEffect(() => {

        loadSummary();

    }, []);

    const loadSummary = async () => {
    try {
        const res = await API.get("/summary");

        console.log("Summary Response:", res.data);

        setSummary(res.data);

    } catch (err) {
    console.error("Summary Error:", err);

    setSummary({
        total_interactions: 0,
        positive: 0,
        neutral: 0,
        negative: 0
    });
}
};
    if (!summary)
        return <h3>Loading...</h3>;

    return (

        <div className="summary">

            <div className="box">
                <h2>{summary.total_interactions}</h2>
                <p>Total</p>
            </div>

            <div className="box">
                <h2>{summary.positive}</h2>
                <p>Positive</p>
            </div>

            <div className="box">
                <h2>{summary.neutral}</h2>
                <p>Neutral</p>
            </div>

            <div className="box">
                <h2>{summary.negative}</h2>
                <p>Negative</p>
            </div>

        </div>

    );

}