import axios from "axios";
import { all, call, put, takeEvery, fork } from "redux-saga/effects";
import {
  POSTDELETE_FAILURE,
  POSTDELETE_REQUEST,
  POSTDELETE_SUCCESS,
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
    yield put(action.navigate(`/post/${result.data._id}`));
  } catch (e) {
    yield put({
      type: POSTUPLOAD_FAILURE,
      payload: e,
    });
  }
}

function* watchUploadPost() {
  yield takeEvery(POSTUPLOAD_REQUEST, upLoadPosts);
}

function loadPostDetailApi(id) {
  return axios.get(`/api/post/${id}`);
}
function* loadDeatilPost(action) {
  try {
    const result = yield call(loadPostDetailApi, action.payload);

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

function deletePostApi(id) {
  return axios.delete(`/api/post/${id}`);
}

function* deletPost(action) {
  try {
    const result = yield call(deletePostApi, action.payload);

    yield put({
      type: POSTDELETE_SUCCESS,
      payload: result.data,
    });
  } catch (err) {
    yield put({
      type: POSTDELETE_FAILURE,
      payload: err,
    });
  }
}

function* watchLoadPostDetail() {
  yield takeEvery(POSTDETAILLOAD_REQUEST, loadDeatilPost);
}

function* watchDeletePost() {
  yield takeEvery(POSTDELETE_REQUEST, deletPost);
}

export default function* postSaga() {
  yield all([
    fork(watchLoadPosts),
    fork(watchUploadPost),
    fork(watchLoadPostDetail),
    fork(watchDeletePost),
  ]);
}
