import * as actionTypes from "../actions/Auth/actionTypes";

const initialState = {
  loading: false,
  isLoggedIn: false,
  user: {
    id: "",
    name: "",
    email: "",
    token: "",
  },
  users: [],
  error: "",
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.POST_USER_DATA:
      return {
        ...state,
        loading: true,
      };
    case actionTypes.POST_USER_SUCCESS: {
      const token = action.payload.data.tokens.access.token;
      const user = action.payload.data.user;
      console.log(token, user);
      return {
        ...state,
        loading: false,
        isLoggedIn: true,
        user: {
          id: user.id,
          name: user.name,
          email: user.email,
          token,
        },
      };
    }
    case actionTypes.POST_USER_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case actionTypes.USER_LOGOUT: {
      return initialState;
    }
    default:
      return state;
  }
};

export default authReducer;

// const signUp = (state, action) => {
//   const token = action.payload.tokens.access.token;
//   const user = action.payload.user;
//   console.log("==>", token, user);
//   return {
//     ...state,
//     user: {
//       id: user.id,
//       name: user.name,
//       email: user.email,
//       token: token,
//     },
//   };
// };

// const getList = (state, action) => ({
//   ...state,
//   loading: true,
// });

// const getListSuccess = (state, action) => {
//   console.log("check the data in reducer", action);
//   return {
//     ...state,
//     loading: false,
//     posts: action.payload,
//   };
// };

// const getListFailed = (state, action) => ({
//   ...state,
//   loading: false,
//   posts: [],
// });

// const authReducer = (state = initialState, action) => {
//   console.log("REducereererrerer");
//   switch (action.type) {
//     case SIGN_UP:
//       return signUp(state, action);
//     case GET_LIST:
//       return getList(state, action);
//     case GET_LIST_SUCCESS:
//       return getListSuccess(state, action);
//     case GET_LIST_FAILURE:
//       return getListFailed(state, action);
//     default:
//       return state;
//   }
// };
// export default authReducer;