import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ isAdmin=false, children }) => {
  const { user } = useSelector((state) => state.user);



  if (user === null) {
    return <Navigate to="/login" />;
  } else {
    if (isAdmin === true && user?.role !== "admin") {
      return <Navigate to="/login" />;
    }
    return children;
  }
};

export default ProtectedRoute;
