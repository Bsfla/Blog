import axios from "axios";
import { all, call, put, takeEvery, fork } from "redux-saga/effects";
import {
  POSTLOADING_FAILURE,
  POSTLOADING_SUCCESS,
  POSTUPLOAD_FAILURE,
  POSTUPLOAD_REQUEST,
  POSTUPLOAD_SUCCESS,
  POST_REQUEST,
} from "../types";

const loadPostAPI = (payload) => {
  return axios.get(`/api/post/skip/${payload}`);
};

function* loadPosts(action) {
  try {
    const result = yield call(loadPostAPI, action.payload);
    yield put({
      type: POSTLOADING_SUCCESS,
      payload: result.data,
    });
  } catch (e) {
    yield put({
      type: POSTLOADING_FAILURE,
      payload: e,
    });
  }
}

function* watchLoadPosts() {
  yield takeEvery(POST_REQUEST, loadPosts);
}

const upLoadPostApi = (payload) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  const token = payload.token;

  if (token) {
    config.headers["x-auth-token"] = token;
  }

  return axios.post("/api/post", payload, config);
};

function* upLoadPosts(action) {
  try {
    console.log("ss");
    const result = yield call(upLoadPostApi, action.payload);
    yield put({
      type: POSTUPLOAD_SUCCESS,
      payload: result.data,
    });
    console.log(result);
    yield put(action.navigate(`/post/${result.data._id}`));
  } catch (e) {
    yield put({
      type: POSTUPLOAD_FAILURE,
      payload: e,
    });

    yield put(action.navigate("/"));
  }
}

function* watchUploadPost() {
  yield takeEvery(POSTUPLOAD_REQUEST, upLoadPosts);
}

export default function* postSaga() {
  yield all([fork(watchLoadPosts), fork(watchUploadPost)]);
}
