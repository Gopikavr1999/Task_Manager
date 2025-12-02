import { Navigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";

const AdminRoute = ({ children }: { children: React.ReactNode }) => {
  const { user, token } = useAuth();

  if (!token) {
    return <Navigate to="/login" replace />;
  }

  if (user?.role !== "admin") {
    return <Navigate to="/dashboard" replace />; // employee fallback
  }

  return children;
};

export default AdminRoute;
