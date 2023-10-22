import {
    legacy_createStore,
    combineReducers,
    applyMiddleware,
    compose,
} from "redux";

import thunk from "redux-thunk";
import  booksReducer  from "./books/books.reducer";
import { authReducer } from "./auth/auth.reducer";
import { registerReducer } from "./register/register.reducer";
import { bookPostReducer } from "./books/books.post.reducer";
import { bookDELETEReducer } from "./books/books.delete.reducer.";

const rootReducer = combineReducers({
    register: registerReducer,
    auth: authReducer,
    books: booksReducer,
    bookPost:bookPostReducer,
    bookDelete:bookDELETEReducer
});

const createComposer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = legacy_createStore(
    rootReducer,
    createComposer(applyMiddleware(thunk))
);