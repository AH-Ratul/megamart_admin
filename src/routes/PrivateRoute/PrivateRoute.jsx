import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const { user, role } = useSelector((state) => state.auth);
  console.log(user, role)

  if (user && role) {
    return children;
  }

  if (!user && !role) {
    return <Navigate to="/login"   />;
  }
};

export default PrivateRoute;
