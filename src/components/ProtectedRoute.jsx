import { AuthContext } from "./Auth/AuthContext";
import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
function ProtectedRoute({ children }) {
  const {
    isAuthenticatedUser,
    setIsAuthenticatedUser,
    username,
    setUsername,
    loading
  } = useContext(AuthContext);
  const location = useLocation();
  if (loading) {
    return <h1>Loading......</h1>;
  }
  if (!isAuthenticatedUser) {
    return <Navigate to="/login" state={{ from: location }} />;
  }
  //if authenticated renders the children
  return children;
}

export default ProtectedRoute;
