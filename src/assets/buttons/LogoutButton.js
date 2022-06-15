import React from "react";
import { Button } from "@mui/material";
import { useDispatch } from "react-redux";
import { logOut } from "actions/Auth/authActions";
import { useNavigate } from "react-router-dom";

const style = {
  background : '#813653'
};

const LogoutButton = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleLogout = () => {
    dispatch(logOut());
    navigate("");
  };
  return (
    <Button variant="contained" sx={style} onClick={handleLogout}>
      Logout
    </Button>
  );
};

export default LogoutButton;
