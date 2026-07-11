export default function SearchTable({ data }) {

    if (!data || data.length === 0) {
        return (
            <p style={{ textAlign: "center", marginTop: "20px" }}>
                No interactions found.
            </p>
        );
    }

    return (

        <table
            style={{
                width: "100%",
                borderCollapse: "collapse",
                marginTop: "20px"
            }}
        >

            <thead
                style={{
                    backgroundColor: "#1976d2",
                    color: "white"
                }}
            >

                <tr>

                    <th style={styles.th}>ID</th>
                    <th style={styles.th}>HCP Name</th>
                    <th style={styles.th}>Type</th>
                    <th style={styles.th}>Date</th>
                    <th style={styles.th}>Time</th>
                    <th style={styles.th}>Sentiment</th>

                </tr>

            </thead>

            <tbody>

                {data.map((item) => (

                    <tr key={item.id}>

                        <td style={styles.td}>{item.id}</td>

                        <td style={styles.td}>{item.hcp_name}</td>

                        <td style={styles.td}>{item.interaction_type}</td>

                        <td style={styles.td}>{item.interaction_date}</td>

                        <td style={styles.td}>{item.interaction_time}</td>

                        <td style={styles.td}>{item.sentiment}</td>

                    </tr>

                ))}

            </tbody>

        </table>

    );

}

const styles = {

    th: {
        padding: "12px",
        border: "1px solid #ddd"
    },

    td: {
        padding: "10px",
        border: "1px solid #ddd",
        textAlign: "center"
    }

};