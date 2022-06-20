import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";


// eslint-disable-next-line react/prop-types
export function PrivateRoute({ children }) {
  const auth = useSelector(state=>state.auth.isLoggedIn);

  return auth ? children : <Navigate to="/" />;
}
