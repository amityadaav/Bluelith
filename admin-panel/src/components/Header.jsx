import { useAuth } from "../context/AuthContext";
import "./Header.css";

export default function Header({ title }) {
  const { logout } = useAuth();

  return (
    <header className="admin-header">
      <h2>{title}</h2>

      <div className="header-right">
        <span className="admin-name">Admin</span>
        <button onClick={logout} className="logout-btn">
          Logout
        </button>
      </div>
    </header>
  );
}
