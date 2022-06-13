import * as actionTypes from "./actionTypes";

// SignUp action creators

export const postUserData = () => {
  return {
    type: actionTypes.POST_USER_DATA,
  };
};
export const postUserSuccess = (user) => {
  return {
    type: actionTypes.POST_USER_SUCCESS,
    payload: user,
  };
};
export const postUserFailure = (error) => {
  return {
    type: actionTypes.POST_USER_FAILURE,
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
