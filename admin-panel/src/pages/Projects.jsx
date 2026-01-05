import Sidebar from "../components/Sidebar";

const dummyProjects = [
  {
    id: 1,
    type: "Website",
    budget: "₹25k–₹50k",
    timeline: "1 Month",
    status: "New",
  },
  {
    id: 2,
    type: "Mobile App",
    budget: "₹50k+",
    timeline: "2–3 Months",
    status: "In Progress",
  },
];

export default function Projects() {
  return (
    <div className="layout">
      <Sidebar />
      <main>
        <h1>Project Requests</h1>

        <table>
          <thead>
            <tr>
              <th>Type</th>
              <th>Budget</th>
              <th>Timeline</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {dummyProjects.map((p) => (
              <tr key={p.id}>
                <td>{p.type}</td>
                <td>{p.budget}</td>
                <td>{p.timeline}</td>
                <td>{p.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </main>
    </div>
  );
}
