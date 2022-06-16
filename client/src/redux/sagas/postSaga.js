import axios from "axios";
import { all, call, put, takeEvery, fork } from "redux-saga/effects";
import {
  POSTDETAILLOAD_FAILURE,
  POSTDETAILLOAD_REQUEST,
  POSTDETAILLOAD_SUCCESS,
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
      payload: result.data.postFindResult,
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
    const result = yield call(upLoadPostApi, action.payload);
    yield put({
      type: POSTUPLOAD_SUCCESS,
      payload: result.data,
    });
    yield put(action.navigate("/"));
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

function loadPostDetailApi(id) {
  return axios.get(`/api/post/${id}`);
}
function* loadDeatilPost(action) {
  const result = yield call(loadPostDetailApi, action.payload);

  try {
    yield put({
      type: POSTDETAILLOAD_SUCCESS,
      payload: result.data,
    });
  } catch (e) {
    yield put({
      type: POSTDETAILLOAD_FAILURE,
      payload: e,
    });
  }
}
function* watchLoadPostDetail() {
  yield takeEvery(POSTDETAILLOAD_REQUEST, loadDeatilPost);
}

export default function* postSaga() {
  yield all([
    fork(watchLoadPosts),
    fork(watchUploadPost),
    fork(watchLoadPostDetail),
  ]);
}
