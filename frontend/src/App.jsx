import { BrowserRouter, Routes, Route } from "react-router-dom";

import Dashboard from "./pages/Dashboard";
import Search from "./pages/Search";

import "./styles.css";

export default function App() {

    return (

        <BrowserRouter>

            <Routes>

                <Route path="/" element={<Dashboard />} />

                <Route path="/search" element={<Search />} />

            </Routes>

        </BrowserRouter>

    );

}