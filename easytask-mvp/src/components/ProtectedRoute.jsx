import { useContext } from "react";
import AuthContext from "../contexts/AuthContext";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const { isAuthenticated } = useContext(AuthContext);
  return isAuthenticated ? { children } : <Navigate to="/login" />;
};

export default ProtectedRoute;
