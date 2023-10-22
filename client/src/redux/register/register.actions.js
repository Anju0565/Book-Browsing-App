import {
    REGISTER_REQUEST,
    REGISTER_SUCCESS,
    REGISTER_ERROR,
  } from "./register.types";
  import axios from "axios";
  
  export const registerUser = (creds) => async (dispatch) => {
    dispatch({ type: REGISTER_REQUEST });
    try {
      let res = await axios.post(
        "http://localhost:8080/user/signup",
        creds
      );
      dispatch({ type: REGISTER_SUCCESS, payload: res.data });
      alert("registed successfully")
      
    } catch (error) {
      dispatch({ type: REGISTER_ERROR, payload: error.message });
      alert(error.message)
    }
  };