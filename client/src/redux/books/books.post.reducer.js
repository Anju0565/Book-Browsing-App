import {
    POST_Book_Loding,
    POST_Book_Error,
    POST_Book_Sucess,  
  } from "./books.types";
  
  const bookInitalState = {
    loading: false,
    error: false,
    res:{}
  };
  
  export const bookPostReducer = (
    state = bookInitalState,
    { type, payload }
  ) => {
    switch (type) {
      case POST_Book_Loding: {
        return {
          ...state,
          loading: true,
          error: false,
        };
      }
      case POST_Book_Sucess: {
        return {
          ...state,
          loading: false,
          error: false,
          res: payload,
        };
      }
      case POST_Book_Error: {
        return {
          ...state,
          loading: false,
          error: true,
        };
      }
      
      default: {
        return state;
      }
    }
  };