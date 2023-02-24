import { call, put } from "redux-saga/effects";
import { setUser, setError } from "../../ducks/UserSlice";
import { requestGetUser } from "../requests/user";

export function* handleGetUser(action) {
  try {
    const response = yield call(requestGetUser);
    const { data } = response;
    yield put(setUser(data));
  } catch (error) {
    yield put(setError("Something went wrong..."));
  }
}
