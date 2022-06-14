import { Paper, Stack } from "@mui/material";
import { useSelector } from "react-redux";
import React from "react";
import "./userDashboard.css";

const UserDashboard = () => {
  const user = useSelector((state) => state.auth.user);
  return (
    <Paper
      className="dashboard-container"
      elevation={5}
      sx={{
        width: "100%",
        minHeight: "100%",
        padding: "2rem",
        bgcolor: "#d4d4dc",
      }}
    >
      <Stack direction={"column"}>
        <h1>{`Welcome, ${user.name} !`}</h1>
      </Stack>
    </Paper>
  );
};

export default UserDashboard;
