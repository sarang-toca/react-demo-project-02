import React from "react";
import useInput from "hooks/use-input";
import { Avatar, Paper, Stack, TextField, Button, Box } from "@mui/material";
import { Link } from "react-router-dom";
import "./SignUp.css";
import { signup } from "actions/Auth/authActions";

const SignUpPage = () => {
  const {
    value: enteredUserName,
    hasError: userNameInputHasError,
    valueChangeHandler: userNameChangeHandler,
    inputBlurHandler: userNameBlurHandler,
    reset: resetUserNameInput,
  } = useInput((value) => value.trim() !== "");

  const {
    value: enteredEmail,
    hasError: emailInputHasError,
    valueChangeHandler: emailChangeHandler,
    inputBlurHandler: emailBlurHandler,
    reset: resetEmailInput,
  } = useInput((value) => value.includes("@"));

  const {
    value: enteredPassword,
    hasError: passwordInputHasError,
    valueChangeHandler: passwordChangeHandler,
    inputBlurHandler: passwordBlurHandler,
    reset: resetPasswordInput,
  } = useInput((value) => value.trim().length >= 4);

  const userData = {
    name: enteredUserName,
    email: enteredEmail,
    password: enteredPassword,
  };

  const signupHandler = (e) => {
    e.preventDefault();
    signup(userData);
    resetUserNameInput();
    resetEmailInput();
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
            bgcolor: "#ecc3c3",
            width: "4rem",
            height: "4rem",
            margin: "0 auto",
          }}
        ></Avatar>
        <h2 className="form-title"> SignUp! </h2>
        <form onSubmit={signupHandler}>
          <Stack height={"5rem"}>
            <TextField
              label="Username"
              placeholder="Enter user-name"
              variant="standard"
              size="small"
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
              label="Email"
              placeholder="Enter email"
              type="email"
              variant="standard"
              size="small"
              value={enteredEmail}
              onChange={emailChangeHandler}
              onBlur={emailBlurHandler}
              fullWidth
              required
              error={emailInputHasError}
              helperText={
                emailInputHasError ? "Please enter valid email address!" : ""
              }
            />
          </Box>
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
                passwordInputHasError
                  ? "Please enter valid Password! (atleast 4 characters)"
                  : ""
              }
            />
          </Box>
          <Stack
            direction={"row-reverse"}
            spacing={4}
            style={{ marginTop: "1rem" }}
          >
            <Button variant="contained" type="submit">
              Signup
            </Button>
            <Link to="/">
              <Button variant="outlined">Login ?</Button>
            </Link>
          </Stack>
        </form>
      </Stack>
    </Paper>
  );
};

export default SignUpPage;
