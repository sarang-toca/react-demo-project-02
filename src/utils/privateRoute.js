import React from "react";
import { Navigate } from "react-router-dom";

// eslint-disable-next-line react/prop-types
export function PrivateRoute({ children }) {
  const auth = localStorage.getItem("token");
  return auth ? children : <Navigate to="/" />;
}
