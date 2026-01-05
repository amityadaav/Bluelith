import { Link } from "react-router-dom";
import "./Sidebar.css";

export default function Sidebar() {
  return (
    <aside className="sidebar">
      <h3>Admin Panel</h3>
      <nav>
        <Link to="/">Dashboard</Link>
        <Link to="/projects">Projects</Link>
      </nav>
    </aside>
  );
}
