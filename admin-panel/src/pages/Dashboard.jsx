import Sidebar from "../components/Sidebar";
import "./Dashboard.css"
export default function Dashboard() {
  return (
    <div className="layout">
      <Sidebar />
      <main>
        <h1>Dashboard</h1>

        <div className="stats">
          <div className="card">Total Requests: 12</div>
          <div className="card">New: 5</div>
          <div className="card">In Progress: 4</div>
          <div className="card">Completed: 3</div>
        </div>
      </main>
    </div>
  );
}
