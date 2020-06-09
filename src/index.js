import React from "react";
import { render } from "react-dom";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { Provider } from "react-redux";

import App from "./App";
import "./App.css";
import rootReducer from "./reducers";

const middleWare = [thunk];
const store = createStore(rootReducer, applyMiddleware(...middleWare));

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
