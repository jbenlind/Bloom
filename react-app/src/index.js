import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";

import "./index.css";
import App from "./App";
import configureStore from "./store";
import { ModalProvider } from "./context/modal.js"

import * as sessionActions from "./store/session";

const store = configureStore();

if (process.env.NODE_ENV !== "production") {
  window.store = store;
  window.sessionActions = sessionActions;
}

const Root = () => (
    <Provider store={store}>
      <ModalProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </ModalProvider>
    </Provider>
);

ReactDOM.render(
  <React.StrictMode>
    <Root  />
  </React.StrictMode>,
  document.getElementById("root")
);
