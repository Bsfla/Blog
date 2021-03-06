import { all, fork } from "redux-saga/effects";
import axios from "axios";
import authSaga from "./authSaga";
import postSaga from "./postSaga";
import commentSaga from "./commentSaga";

axios.defaults.baseURL = process.env.REACT_APP_BASIC_SERVER_URL;

//제너레이터
export default function* rootSaga() {
  yield all([fork(authSaga), fork(postSaga), fork(commentSaga)]);
}
