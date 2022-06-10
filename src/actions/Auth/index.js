import * as actionTypes from "./actionTypes";

// SignUp action creators
// POST_USER_DATA = "POST_USER_DATA";
// export const POST_USER_SUCCESS = "POST_USER_SUCCESS";
// export const POST_USER_FAILURE = "POST_USER_FAILURE";
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
