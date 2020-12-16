import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

import { Provider } from "react-redux";
import saga from "./sagas/sagas";
import ErrorBoundary from "./container/ErrorBoundary";
import { applyMiddleware, createStore } from "redux";
import createSagaMiddleware from "redux-saga";
import { allreducers } from "./reducers/allReducers";

const sagaMiddleware = createSagaMiddleware();

let store = createStore(allreducers, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(saga);

ReactDOM.render(
  <Provider store={store}>
    <ErrorBoundary>
      <App />
    </ErrorBoundary>
  </Provider>,
  document.getElementById("root")
);