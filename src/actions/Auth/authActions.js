import api from "../../service/api";
import { toast } from "react-toastify";
import * as actions from "./index";

export const signUp = (user) => {
  return (dispatch) => {
    dispatch(actions.postUserData());
    api
      .post(`v1/auth/register`, user)
      .then((token) => {
        localStorage.setItem("token", token.data.tokens.access.token);
        dispatch(actions.postUserSuccess(token));
      })
      .catch((error) => {
        const errorMessage = error.message;
        dispatch(actions.postUserFailure(errorMessage));
        console.log(error);
        toast.error(error.message, {
          position: toast.POSITION.TOP_RIGHT,
        });
      });
  };
};

export const logOut = () => {
  localStorage.removeItem("token");
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
