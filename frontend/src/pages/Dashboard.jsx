import Navbar from "../components/Navbar";
import InteractionForm from "../components/InteractionForm";
import AIAssistant from "../components/AIAssistant";
import SummaryCards from "../components/SummaryCards";
import RecentInteractions from "../components/RecentInteractions";

export default function Dashboard() {

    return (

        <>

            <Navbar />

            <div className="container">

                <h1>Dashboard</h1>

                <SummaryCards />

                <div className="layout">

                    <InteractionForm />

                    <AIAssistant />

                </div>

                <RecentInteractions />

            </div>

        </>

    );

}