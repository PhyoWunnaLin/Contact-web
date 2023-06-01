import Cookies from "js-cookie";
import React from "react";
import { Navigate } from "react-router";

const RouteGuard = ({ children }) => {
  const token = Cookies.get("token");

  if (token) {
    return children;
  } else {
    return <Navigate to={"/login"} />;
  }
};

export default RouteGuard;
