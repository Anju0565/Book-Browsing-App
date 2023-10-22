import {
    LOGIN_ERROR,
    LOGIN_REQUEST,
    LOGIN_SUCCESS,
    LOGOUT
  } from "./auth.types";
  
  let LocalToken = JSON.parse(localStorage.getItem("token"));
  const check = (LocalToken!=undefined)

  const initialState = {
    token:  LocalToken,
    isAuth: check ,
    loading: false,
    error: false,
    userData : {  details : {} }
  };
  
  export const authReducer = (state = initialState, { type, payload }) => {
    switch (type) {
      case LOGIN_REQUEST : {
        //localStorage.setItem("token", payload);
        return {
          ...state,
          loading: true,
          error: false,
        };
      }
      case LOGIN_SUCCESS: {
        localStorage.setItem("token", JSON.stringify(payload));
        return {
          ...state,
          isAuth: true,
          token: payload,
          loading: false,
          error: false,
        };
      }
  
      case LOGIN_ERROR : {
       // localStorage.setItem("token", payload);
        return {
          ...state,
          loading: false,
          error: true,
          errorMessage: payload,
        };
      }
      case LOGOUT: {
        localStorage.removeItem("token");
        return {
          ...state,
          isAuth: false,
          token: "",
          userData : {  details : {} }
        };
      }
      default: {
        return state;
      }
    }
  };