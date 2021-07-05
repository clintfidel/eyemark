import React, { Suspense } from "react";
import ReactDOM from "react-dom";
import "./theme/index.scss";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import store from "./store/store";
import { Provider } from "react-redux";

ReactDOM.render(
  <Suspense fallback={<div></div>}>
    <Provider store={store}>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </Provider>
  </Suspense>,
  document.getElementById("root")
);

reportWebVitals();
