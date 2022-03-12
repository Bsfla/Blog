import axios from 'axios';
import { all, call, fork, put, takeEvery } from 'redux-saga/effects';
import { LOGIN_FAILURE, LOGIN_REQUEST, LOGIN_SUCCESS } from '../types';

const loginUserApi = (loginData) => {
  return axios.post('api/auth',loginData);
}

function* loginUser(action) {
    try {
       const result = yield call(loginUserApi, action.payload);
       yield put({
           type: LOGIN_SUCCESS,
           payload: action.payload
       })
    } catch(e) {
        yield put({
            type: LOGIN_FAILURE,
            payload: e.response
        })
    }
}

function* watchLoginUser() {
    yield takeEvery(LOGIN_REQUEST, loginUser)
}

export default function* authSaga() {
    yield all([
        fork(watchLoginUser)
    ]);
}