import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
useSelector(state=>state)

// eslint-disable-next-line react/prop-types
export function PrivateRoute() {
  return localStorage.getItem("token") ? <Navigate to='/dashboard' /> : <Navigate to='/' /> 
}
