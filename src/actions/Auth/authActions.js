import api from "../../service/api";
import jwtDecode from "jwt-decode";
import { toast } from "react-toastify";
import * as actions from "./index";

export const signUp = (user, navigate) => {
  return (dispatch) => {
    dispatch(actions.userSignupRequest());
    api
      .post(`v1/auth/register`, user)
      .then((token) => {
        localStorage.setItem("token", token.data.tokens.access.token);
        localStorage.setItem("refreshToken", token.data.tokens.refresh.token);
        dispatch(actions.userSignupSuccess(token));
        navigate("/dashboard");
      })
      .catch((error) => {
        const errorMessage = error.message;
        dispatch(actions.userSignupFailure(errorMessage));
        console.log(error);
        toast.error(error.message, {
          position: toast.POSITION.TOP_RIGHT,
        });
      });
  };
};

export const signIn = (user, navigate) => {
  return (dispatch) => {
    dispatch(actions.userLoginRequest());
    api
      .post(`v1/auth/login`, user)
      .then((token) => {
        localStorage.setItem("token", token.data.tokens.access.token);
        localStorage.setItem("refreshToken", token.data.tokens.refresh.token);
        dispatch(actions.userLoginSuccess(token));
        navigate("/dashboard");
      })
      .catch((error) => {
        const errorMessage = error.message;
        dispatch(actions.userLoginFailure(errorMessage));
        console.log(error);
        toast.error(error.message, {
          position: toast.POSITION.TOP_RIGHT,
        });
      });
  };
};

export const loadUser = (refreshToken) => {
  return (dispatch) => {
    dispatch(actions.loadUserRequest());
    api
      .post(`v1/auth/refresh-tokens`, refreshToken)
      .then((token) => {
        localStorage.setItem("token", token.data.access.token);
        localStorage.setItem("refreshToken", token.data.refresh.token);
        const { sub: userId } = jwtDecode(token.data.access.token);
        console.log(userId);
        const loadUserDetails = (userId) => {
          api.get(`v1/users/${userId}`).then((user) => {
            console.log(user.data);
            dispatch(actions.loadUserSuccess(user.data));
          });
        };
        loadUserDetails(userId);
      })
      .catch((error) => {
        const errorMessage = error.message;
        dispatch(actions.loadUserFailure(errorMessage));
        toast.error(error.errorMessage, {
          position: toast.POSITION.TOP_RIGHT,
        });
      });
  };
};

export const logOut = (refreshToken) => {
  localStorage.removeItem("token");
  localStorage.removeItem("refreshToken");
  localStorage.removeItem("redux");
  return (dispatch) => {
    dispatch(actions.userLogout());
  };
};

// export const signIn = (email, password) => {
//   // console.log("..................", email,password)
//   return (dispatch) => {
//     api
//       .post(`/auth/login`, { email, password })
//       .then((token) => {
//         // localStorage.setItem("token", token.data.tokens.access.token);
//         dispatch({
//           type: "SIGN_IN",
//           payload: token.data,
//         });
//       })
//       .catch((error) => {
//         console.log(error.response);

//         toast.error(error.response?.data.message, {
//           position: toast.POSITION.TOP_RIGHT,
//         });
//       });
//   };
// };

// export const loadUser = () => {
//   return (dispatch, getState) => {
//     const token = getState().auth.token;
//     // console.log("load User token data", token);
//     if (token) {
//       dispatch({
//         type: "USER_LOADED",
//         token,
//       });
//     } else return null;
//   };
// };

// export const signOut = () => {
//   return (dispatch) => {
//     dispatch({
//       type: "SIGN_OUT",
//     });
//   };
// };

// export const getUsers = (data) => {
//   return {
//     type: GET_USERS,
//     payload: data,
//   };
// };

// export const userDeleted = () => {
//   return {
//     type: "DELETE_USER",
//   };
// };

// export const userAdded = () => {
//   return {
//     type: "ADDED_USER",
//   };
// };

// export const userEdited = (data) => {
//   return {
//     type: "EDITED_USER",
//     payload: data,
//   };
// };

// export const getDetails = () => async (dispatch) => {
//   try {
//     const response = await api.get("/users");
//     console.log(response);
//     dispatch(getUsers(response.data.results));
//   } catch (error) {
//     console.log(error);
//     toast.error(error.response?.data.message, {
//       position: toast.POSITION.TOP_RIGHT,
//     });
//   }
// };

// export const deleteUser = (id) => async (dispatch) => {
//   try {
//     const response = await api.delete(`/users/${id}`);
//     console.log("response", response);
//     dispatch(userDeleted(response));
//     dispatch(getDetails());
//   } catch (error) {
//     console.log(error);
//     toast.error(error.response?.data.message, {
//       position: toast.POSITION.TOP_RIGHT,
//     });
//   }
// };

// export const addUser = (user) => async (dispatch) => {
//   try {
//     const response = await api.post("/users", user);
//     console.log("response", response);
//     dispatch(userAdded(response));
//     dispatch(getDetails());
//   } catch (error) {
//     console.log(error);
//     toast.error(error.response?.data.message, {
//       position: toast.POSITION.TOP_RIGHT,
//     });
//   }
// };

// export const editUser = (id, user) => async (dispatch) => {
//   try {
//     const response = await api.patch(`/users/${id}`, user);
//     console.log("response", response);
//     dispatch(userEdited(response));
//     dispatch(getDetails());
//   } catch (error) {
//     console.log(error);
//     toast.error(error.response?.data.message, {
//       position: toast.POSITION.TOP_RIGHT,
//     });
//   }
// };
// export const signIn =(token)=>{
//   return{
//     type: "SIGN_IN",
//     payload: token
//   }
// }

// const loaduser = (users) => ({
//   type: "GET_USERS",
//   payload: users,
// });

// export const getUser = () => {
//   return function (dispatch) {
//     axios
//     .get(`${url}/users`, { headers: {interceptor}})
//     .then((resp) => {
//       console.log("response", resp)
//       dispatch(loaduser(resp.data));
//     }).catch((error) => {
//       console.log(error.response);

//       toast.error(error.response?.data.message, {
//         position: toast.POSITION.TOP_RIGHT,
//       });
//     });
//   }
// }

// export const getUser = () => {

//   const api = `${url}/users`

//   return (dispatch) => {
//     axios
//       .get(api, { headers: {interceptor}})
//       .then((token) => {
//         dispatch({
//           type: "GET_USER",
//           token: token.data.tokens.access.token,
//           id: token.data.user.id,
//           name: token.data.user.name,
//           email: token.data.user.email,
//         });

//       })
//       .catch((error) => {
//         // console.log(error.response.data.message)
//         toast.error(error.response?.data.message, {
//           position: toast.POSITION.TOP_RIGHT,
//         });
//       });
//   };
// }
