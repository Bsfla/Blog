import { createStore, compose, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";

import createRootReducer from "./reducers";
import rootSaga from "./sagas";



const sagaMiddleware = createSagaMiddleware();

const devtools = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;
const composeEnhancer =
  process.env.NODE_ENV === "production" ? compose : devtools || compose;

const initialState = {};

const store = createStore(
  createRootReducer(),
  initialState,
  composeEnhancer(applyMiddleware(sagaMiddleware))
);

sagaMiddleware.run(rootSaga);

export default store;
