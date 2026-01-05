import { Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import "./ProjectDetails.css";

export default function ProtectedRoute({ children }) {
  const { token } = useAuth();
  return token ? children : <Navigate to="/login" />;
}
