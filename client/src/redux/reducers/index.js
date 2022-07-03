import { combineReducers } from "redux";
import authReducer from "./authReducer";
import { postReducer } from "./postReducer";
import { commentReduer } from "./commentReducer";

const createRootReducer = (history) =>
  combineReducers({
    auth: authReducer,
    post: postReducer,
    comment: commentReduer,
  });

export default createRootReducer;
