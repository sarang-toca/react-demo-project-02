import { Stack } from "@mui/material";
import React from "react";
import UsersDetails from "../Tables/UsersDetails";

const AdminDashboard = () => {
  return (
    <Stack sx={{ alignItems: "center", mt: 5, mb: 5 }}>
      <UsersDetails />
    </Stack>
  );
};

export default AdminDashboard;
