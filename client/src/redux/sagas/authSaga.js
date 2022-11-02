import axios from "axios";
import { all, call, fork, put, takeEvery } from "redux-saga/effects";
import {
  LOGIN_FAILURE,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGOUT_FAILURE,
  LOGOUT_REQUEST,
  LOGOUT_SUCCESS,
  PASSWORD_EDIT_REQUEST,
  REGISTER_FAILURE,
  REGISTER_REQUEST,
  REGISTER_SUCCESS,
  USERLOADING_FAILURE,
  USERLOADING_SUCCESS,
  USERLOAING_REQUEST,
} from "../types";

const loginUserApi = (loginData) => {
  return axios.post("api/auth", loginData);
};

const registerUserApi = (registerData) => {
  return axios.post("api/user", registerData);
};

const userLoadingApi = (token) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  if (token) {
    config.headers["x-auth-token"] = token;
  }
  return axios.get("api/auth/user", config);
};

function* loginUser(action) {
  try {
    const result = yield call(loginUserApi, action.data);
    yield put({
      type: LOGIN_SUCCESS,
      payload: result.data,
    });
  } catch (e) {
    yield put({
      type: LOGIN_FAILURE,
      payload: e.response,
    });
  }
}

function* logoutUser() {
  try {
    yield put({
      type: LOGOUT_SUCCESS,
    });
  } catch (e) {
    yield put({
      type: LOGOUT_FAILURE,
    });
  }
}

function* registerUser(action) {
  try {
    const result = yield call(registerUserApi, action.data);
    yield put({
      type: REGISTER_SUCCESS,
      payload: result,
    });
  } catch (e) {
    yield put({
      type: REGISTER_FAILURE,
      payload: e.response,
    });
  }
}

function* loadingUser(action) {
  try {
    const result = yield call(userLoadingApi, action.payload);
    yield put({
      type: USERLOADING_SUCCESS,
      payload: result.data,
    });
  } catch (e) {
    yield put({
      type: USERLOADING_FAILURE,
      payload: e.response,
    });
  }
}

function passWordApi(payload) {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  if (payload.token) {
    config.headers["x-auth-token"] = payload.token;
  }
  return axios.post(`api/user/${payload.userName}/profile`, payload, config);
}

function* passwordEdit(action) {
  try {
    const result = yield call(passWordApi, action.payload);
    console.log(result);
  } catch (err) {
    console.log(err);
  }
}

function* watchLogoutUser() {
  yield takeEvery(LOGOUT_REQUEST, logoutUser);
}

function* watchLoginUser() {
  yield takeEvery(LOGIN_REQUEST, loginUser);
}

function* watchRegisterUser() {
  yield takeEvery(REGISTER_REQUEST, registerUser);
}

function* watchLoadingUser() {
  yield takeEvery(USERLOAING_REQUEST, loadingUser);
}

function* watchPassWordEdit() {
  yield takeEvery(PASSWORD_EDIT_REQUEST, passwordEdit);
}

export default function* authSaga() {
  yield all([
    fork(watchLoginUser),
    fork(watchLogoutUser),
    fork(watchRegisterUser),
    fork(watchLoadingUser),
    fork(watchPassWordEdit),
  ]);
}
