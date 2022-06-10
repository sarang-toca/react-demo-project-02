import React from "react";
import useInput from "hooks/use-input";
import {
  Avatar,
  Paper,
  Stack,
  TextField,
  Button,
  Box,
  FormControlLabel,
  Checkbox,
} from "@mui/material";
import { Link } from "react-router-dom";
import "./LogIn.css";

const LogInPage = () => {
  const {
    value: enteredUserName,
    hasError: userNameInputHasError,
    valueChangeHandler: userNameChangeHandler,
    inputBlurHandler: userNameBlurHandler,
    reset: resetUserNameInput,
  } = useInput((value) => value.trim() !== "");

  const {
    value: enteredPassword,
    hasError: passwordInputHasError,
    valueChangeHandler: passwordChangeHandler,
    inputBlurHandler: passwordBlurHandler,
    reset: resetPasswordInput,
  } = useInput((value) => value.trim().length >= 4);

  const userData = {
    userName: enteredUserName,
    password: enteredPassword,
  };

  const loginHandler = (e) => {
    e.preventDefault();
    console.log(userData);
    resetUserNameInput();
    resetPasswordInput();
  };

  return (
    <Paper
      elevation={5}
      sx={{ width: "25rem", margin: "4rem auto", padding: "3rem 2rem" }}
    >
      <Stack direction={"column"}>
        <Avatar
          sx={{
            bgcolor: "#813653",
            width: "4rem",
            height: "4rem",
            margin: "0 auto",
          }}
        ></Avatar>
        <h2 className="form-title"> LogIn! </h2>
        <form onSubmit={loginHandler}>
          <Stack height={"5rem"}>
            <TextField
              label="Username"
              placeholder="Enter user-name"
              variant="standard"
              value={enteredUserName}
              onChange={userNameChangeHandler}
              onBlur={userNameBlurHandler}
              fullWidth
              required
              error={userNameInputHasError}
              helperText={
                userNameInputHasError ? "Please enter valid username!" : ""
              }
            />
          </Stack>

          <Box height={"5rem"}>
            <TextField
              label="Password"
              placeholder="Enter Password"
              type="password"
              variant="standard"
              size="small"
              value={enteredPassword}
              onChange={passwordChangeHandler}
              onBlur={passwordBlurHandler}
              fullWidth
              required
              error={passwordInputHasError}
              helperText={
                passwordInputHasError ? "Please enter valid Password!" : ""
              }
            />
          </Box>
          <Box marginLeft={1}>
            <FormControlLabel label="Remember me!" control={<Checkbox />} />
          </Box>
          <Stack
            direction={"row-reverse"}
            spacing={4}
            style={{ margin: "1rem 0 " }}
          >
            <Button variant="contained" type="submit">
              Login
            </Button>
            <Link to="signup">
              <Button variant="outlined">Signup?</Button>
            </Link>
          </Stack>
        </form>
      </Stack>
    </Paper>
  );
};

export default LogInPage;
