import { all } from "redux-saga/effects";
import { sampleSagas } from "./sample";

export default function* sagas() {
  yield all([...sampleSagas]);
}
