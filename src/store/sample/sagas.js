import { takeEvery, fork, call, put } from "redux-saga/effects";
import { types } from "./types";
import * as APIS from "./api";

function* sampleSaga() {
  yield put({ type: types.SAMPLE_LOADING });
  try {
    const result = yield call(APIS.sampleAPIcall);
    yield put({ type: types.SAMPLE_SUCCESS, payload: result.data });
  } catch (e) {
    yield put({ type: types.SAMPLE_FAILED });
  }
}

function* watchSample() {
  yield takeEvery(types.SAMPLE, sampleSaga);
}

export const sampleSagas = [fork(watchSample)];
