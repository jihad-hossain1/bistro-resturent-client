// import React, { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
// import { AuthContext } from "../Provider/AuthProvider";
import useAuth from "../Hook/useAuth";
import useAdmin from "../Hook/useAdmin";

const AdminRoute = ({ children }) => {
  const { user, loading } = useAuth();
  const [isAdmin, isAdminLoading] = useAdmin();
  const location = useLocation();

  if (loading || isAdminLoading) {
    return (
      <div className="text-3xl text-center text-green-600">Loading......</div>
    );
  }

  if (user && isAdmin) {
    return children;
  }
  // return <Navigate to="/login" state={{ from: location }}></Navigate>;
  return <Navigate to="/" state={{ from: location }}></Navigate>;
};

export default AdminRoute;
