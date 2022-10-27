import axios from "axios";
import { all, call, put, takeEvery, fork } from "redux-saga/effects";
import {
  CATEGORY_REQUEST,
  CATEGORY_REQUEST_FAILURE,
  CATEGORY_REQUEST_SUCCESS,
  POSTDELETE_FAILURE,
  POSTDELETE_REQUEST,
  POSTDELETE_SUCCESS,
  POSTDETAILLOAD_FAILURE,
  POSTDETAILLOAD_REQUEST,
  POSTDETAILLOAD_SUCCESS,
  POSTLOADING_FAILURE,
  POSTLOADING_SUCCESS,
  POSTUPDATE_FAILURE,
  POSTUPDATE_REQUEST,
  POSTUPDATE_SUCCESS,
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
    console.log(result.data);

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

function deletePostApi(payload) {
  const token = payload.token;
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  if (token) {
    config.headers["x-auth-token"] = token;
  }
  return axios.delete(`/api/post/${payload.id}`, config);
}

function* deletPost(action) {
  try {
    const result = yield call(deletePostApi, action.payload);

    yield put({
      type: POSTDELETE_SUCCESS,
      payload: result.data,
    });

    yield put(action.navigate("/"));
  } catch (err) {
    yield put({
      type: POSTDELETE_FAILURE,
      payload: err,
    });
  }
}

function upDatePostApi(payload) {
  const token = payload.token;
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  if (token) {
    config.headers["x-auth-token"] = token;
  }
  return axios.post(`/api/post/${payload.id}/edit`, { payload }, config);
}

function* upDatePost(action) {
  try {
    const response = yield call(upDatePostApi, action.payload);

    yield put({
      type: POSTUPDATE_SUCCESS,
      payload: response.data,
    });

    yield put(action.navigate(`/post/${action.payload.id}`));
  } catch (err) {
    yield put({
      type: POSTUPDATE_FAILURE,
      payload: err,
    });
  }
}

function categoryLoadApi(payload) {
  return axios.get(`/api/post/category/${payload}`);
}

function* categoryLoad(action) {
  try {
    const response = yield call(categoryLoadApi, action.payload);

    yield put({
      type: CATEGORY_REQUEST_SUCCESS,
      payload: response.data.posts,
    });
  } catch (err) {
    yield put({
      type: CATEGORY_REQUEST_FAILURE,
      payload: err,
    });
  }
}

function* watchCategoryLoad() {
  yield takeEvery(CATEGORY_REQUEST, categoryLoad);
}

function* watchUpDatePost() {
  yield takeEvery(POSTUPDATE_REQUEST, upDatePost);
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
    fork(watchUpDatePost),
    fork(watchCategoryLoad),
  ]);
}
