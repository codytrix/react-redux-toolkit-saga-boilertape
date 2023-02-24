import { takeLatest } from "redux-saga/effects";
import { handleGetCareers, handleGetCareer } from "./handlers/careers";
import { handleGetUser } from "./handlers/user";
import { getCareer, getCareers } from "../ducks/CareersSlice";
import { getUser } from "../ducks/UserSlice";

export function* watcherSaga() {
  yield takeLatest(getCareers.type, handleGetCareers);
  yield takeLatest(getCareer.type, handleGetCareer);
  yield takeLatest(getUser.type, handleGetUser);
}
