import createSagaMiddleware from "@redux-saga/core";
import {
  combineReducers,
  configureStore,
  getDefaultMiddleware,
} from "@reduxjs/toolkit";
import { watcherSaga } from "./sagas/rootSaga";
import counterSlice from "./ducks/CounterSlice";
import careersSlice from "./ducks/CareersSlice";
import UserSlice from "./ducks/UserSlice";

const sagaMiddleware = createSagaMiddleware();

const reducer = combineReducers({
  counter: counterSlice,
  careers: careersSlice,
  user: UserSlice,
});

const store = configureStore({
  reducer,
  middleware: [...getDefaultMiddleware({ thunk: false }), sagaMiddleware],
});

sagaMiddleware.run(watcherSaga);

export default store;
