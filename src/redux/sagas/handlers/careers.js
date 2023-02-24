import { call, put } from "redux-saga/effects";
import { setCareers, setCareer, setError } from "../../ducks/CareersSlice";
import { requestGetCareers, requestGetCareer } from "../requests/careers";

export function* handleGetCareers(action) {
  try {
    const response = yield call(requestGetCareers);
    const { data } = response;
    yield put(setCareers(data));
  } catch (error) {
    yield put(setError("Something went wrong..."));
  }
}

export function* handleGetCareer(action) {
  const { id } = action.payload;
  try {
    const response = yield call(requestGetCareer, id);
    const { data } = response;
    yield put(setCareer(data));
  } catch (error) {
    yield put(setError("Something went wrong..."));
  }
}
