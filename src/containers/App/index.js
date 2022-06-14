import React from "react";
import { Route, Routes } from "react-router-dom";
import { interceptor } from "utils/interceptor";
import Layout from "common/Layout";
import SignUpPage from "components/Forms/SignUp";
import LogInPage from "components/Forms/LogIn";
import UserDashboard from "components/Dashboard";
import { PrivateRoute } from "utils/privateRoute";

export default function App() {
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
      </Routes>
    </Layout>
  );
}
