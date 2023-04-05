import React from "react";
import { useContext } from "react";
import { Authcontext } from "../../contexts/AuthProvider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";
import Spinner from "react-bootstrap/Spinner";

const PrivateRoute = ({ children }) => {
  const { user, loader } = useContext(Authcontext);
  const location = useLocation();
  if (loader) {
    return <Spinner animation="grow" />;
  }
  if (!user) {
    return <Navigate to="/login" state={{ from: location }} replace></Navigate>;
  }
  return children;
};

export default PrivateRoute;
