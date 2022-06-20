import React, { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import { interceptor } from "utils/interceptor";
import Layout from "common/Layout";
import SignUpPage from "components/Forms/SignUp";
import LogInPage from "components/Forms/LogIn";
import UserDashboard from "components/Dashboard";
import { PrivateRoute } from "utils/privateRoute";
import { loadUser } from "actions/Auth/authActions";
import { useDispatch, useSelector } from "react-redux";
import AdminControlForm from "components/Forms/Admin";

export default function App() {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);

  const refreshToken = {
    refreshToken: localStorage.getItem("refreshToken"),
  };

  useEffect(() => {
    isLoggedIn && dispatch(loadUser(refreshToken));
  }, []);

  interceptor();
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<LogInPage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route
          path="/dashboard"
          element={
            <PrivateRoute>
              <UserDashboard />
            </PrivateRoute>
          }
        />
        <Route
          path="/admin-control"
          element={
            <PrivateRoute>
              <AdminControlForm />
            </PrivateRoute>
          }
        />
      </Routes>
    </Layout>
  );
}
