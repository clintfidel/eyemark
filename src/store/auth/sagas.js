import { takeEvery, fork, call, put } from "redux-saga/effects";
import { types } from "./types";
import * as APIS from "./api";
import history from "routes/history";
import { createAccountRoutes, modulesRoutes } from "routes/routes-list";

function* register({ payload }) {
  yield put({ type: types.REGISTER_LOADING });
  try {
    const result = yield call(APIS.register, payload);
    console.log("result=>", result);
    const { access_token, refresh_token, user } = result.data;
    localStorage.setItem("access_token", access_token);
    localStorage.setItem("refresh_token", refresh_token);
    yield put({ type: types.GET_USER, payload: user });
    console.log(createAccountRoutes);
    // history.push(`/onboarding/${createAccountRoutes.screen5}`);
    history.push(`/citizen/${modulesRoutes.screen1}/${createAccountRoutes.screen2}`);
  } catch (e) {
    alert(JSON.stringify(e));
    yield put({ type: types.REGISTER_DONE });
  }
}

function* watchAuth() {
  yield takeEvery(types.REGISTER, register);
}

export const authSagas = [fork(watchAuth)];
