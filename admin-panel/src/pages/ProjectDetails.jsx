import { useParams, Link } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";

const dummyProjects = [
  {
    id: "1",
    type: "Website",
    description:
      "Business website with contact form, admin panel and SEO optimization.",
    timeline: "1 Month",
    budget: "₹25k–₹50k",
    status: "New",
    createdAt: "2025-01-10",
  },
  {
    id: "2",
    type: "Mobile App",
    description:
      "Food delivery mobile app with real-time tracking and payment gateway.",
    timeline: "2–3 Months",
    budget: "₹50k+",
    status: "In Progress",
    createdAt: "2025-01-12",
  },
];

export default function ProjectDetails() {
  const { id } = useParams();
  const project = dummyProjects.find((p) => p.id === id);

  if (!project) {
    return <h2 style={{ padding: 40 }}>Project not found</h2>;
  }

  return (
    <div className="layout">
      <Sidebar />

      <main>
        <Header title="Project Details" />

        <div className="project-details-card">
          <p><strong>Project Type:</strong> {project.type}</p>
          <p><strong>Budget:</strong> {project.budget}</p>
          <p><strong>Timeline:</strong> {project.timeline}</p>
          <p><strong>Status:</strong> {project.status}</p>
          <p><strong>Submitted On:</strong> {project.createdAt}</p>

          <div className="project-desc">
            <strong>Description</strong>
            <p>{project.description}</p>
          </div>

          <div className="project-actions">
            <select defaultValue={project.status}>
              <option>New</option>
              <option>Contacted</option>
              <option>In Progress</option>
              <option>Completed</option>
              <option>Rejected</option>
            </select>

            <Link to="/projects" className="back-btn">
              ← Back to Projects
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}
