import * as actionTypes from "./actionTypes";

// SignUp action creators

export const userSignupRequest = () => {
  return {
    type: actionTypes.USER_SIGNUP_REQUEST,
  };
};
export const userSignupSuccess = (user) => {
  return {
    type: actionTypes.USER_SIGNUP_SUCCESS,
    payload: user,
  };
};
export const userSignupFailure = (error) => {
  return {
    type: actionTypes.USER_SIGNUP_FAILURE,
    payload: error,
  };
};

// Login action creators

export const userLoginRequest = () => {
  return {
    type: actionTypes.USER_LOGIN_REQUEST,
  };
};
export const userLoginSuccess = (user) => {
  return {
    type: actionTypes.USER_LOGIN_SUCCESS,
    payload: user,
  };
};
export const userLoginFailure = (error) => {
  return {
    type: actionTypes.USER_LOGIN_FAILURE,
    payload: error,
  };
};

// Logout action creators

export const userLogout = () => {
  return {
    type: actionTypes.USER_LOGOUT,
  };
};

// unknown action creators

export const getList = () => ({
  type: actionTypes.GET_LIST,
});

export const getListSuccess = (data) => ({
  type: actionTypes.GET_LIST_SUCCESS,
  payload: data,
});

export const getListFailure = () => ({
  type: actionTypes.GET_LIST_FAILURE,
});
