import { combineReducers } from "redux";
import authReducer from './authReducer';
import { postReducer } from "./postReducer";

const createRootReducer = (history) =>
  combineReducers({
    auth: authReducer,
    post: postReducer
  });

export default createRootReducer;
