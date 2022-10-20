import axios from "axios";
import { all, call, put, takeEvery, fork } from "redux-saga/effects";
import {
  COMMENTLOAD_REQUEST,
  COMMENTLOAD_SUCCESS,
  COMMENTLOAD_FAILURE,
  COMMENTUPLOAD_REQUEST,
  COMMENTUPLOAD_SUCCESS,
  COMMENTUPLOAD_FAILURE,
} from "../types";

const loadCommentApi = (payload) => {
  return axios.get(`/api/post/${payload}/comments`);
};

function* loadComment(action) {
  try {
    const result = yield call(loadCommentApi, action.payload);
    yield put({
      type: COMMENTLOAD_SUCCESS,
      payload: result.data,
    });
  } catch (e) {
    yield put({
      type: COMMENTLOAD_FAILURE,
    });
  }
}

function* watchLoadComment() {
  yield takeEvery(COMMENTLOAD_REQUEST, loadComment);
}

const upLoadCommetsAPI = (payload) => {
  return axios.post(`/api/post/${payload.id}/comments`, payload);
};

function* upLoadComments(action) {
  try {
    const result = yield call(upLoadCommetsAPI, action.payload);

    yield put({
      type: COMMENTUPLOAD_SUCCESS,
      payload: result.data,
    });
  } catch (e) {
    console.log(e);

    yield put({
      type: COMMENTUPLOAD_FAILURE,
      payload: e,
    });
  }
}

function* watchUpLoadComment() {
  yield takeEvery(COMMENTUPLOAD_REQUEST, upLoadComments);
}

export default function* commentSaga() {
  yield all([fork(watchLoadComment), fork(watchUpLoadComment)]);
}
