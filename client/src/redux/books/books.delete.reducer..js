import {
    DELETE_Book_Loding,
    DELETE_Book_Error,
    DELETE_Book_Sucess,  
  } from "./books.types";
  
  const bookInitalState = {
    loading: false,
    error: false,
    res:{}
  };
  
  export const bookDELETEReducer = (
    state = bookInitalState,
    { type, payload }
  ) => {
    switch (type) {
      case DELETE_Book_Loding: {
        return {
          ...state,
          loading: true,
          error: false,
        };
      }
      case DELETE_Book_Sucess: {
        return {
          ...state,
          loading: false,
          error: false,
          res: payload,
        };
      }
      case DELETE_Book_Error: {
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