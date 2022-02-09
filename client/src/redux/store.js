import { createStore, compose, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import { createBrowserHistory } from "history";
import { routerMiddleware } from "connected-react-router";
import createRootReducer from "./reducers";

export const history = createBrowserHistory();

const sagaMiddleware = createSagaMiddleware();

const devtools = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;
const composeEnhancer =
  process.env.NODE_ENV === "production" ? compose : devtools || compose;

const initialState = {};

const store = createStore(
  createRootReducer(history),
  initialState,
  composeEnhancer(applyMiddleware(sagaMiddleware, routerMiddleware(history)))
);

export default store;
