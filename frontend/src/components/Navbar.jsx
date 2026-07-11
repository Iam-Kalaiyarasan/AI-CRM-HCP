import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">
        🤖 AI First CRM
      </div>

      <div className="nav-links">
        <Link to="/">Dashboard</Link>
        <Link to="/search">Search</Link>
      </div>
    </nav>
  );
}