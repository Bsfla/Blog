import axios from "axios"
import { all, call, put, takeEvery, fork } from "redux-saga/effects";
import { POSTLOADING_FAILURE, POSTLOADING_SUCCESS, POST_REQUEST } from "../types";

const loadPostAPI = () => {
    return axios.get('api/post');
}

function* loadPost() {
    const result = yield call(loadPostAPI);

    try {
        yield put({
            type: POSTLOADING_SUCCESS,
            payload: result.data
        })
    } catch(e) {
        yield put({
            type: POSTLOADING_FAILURE,
            payload: e
        })
    }
}

function* watchLoadPosts() {
    yield takeEvery(POST_REQUEST, loadPost);
}

export default function* postSaga() {
    yield all([
        fork(watchLoadPosts)
    ])
}