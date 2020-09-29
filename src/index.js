import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./assets/computer.css";
import "./assets/mobile.css";
import "./assets/index.scss";
import "./assets/SimpleFB.scss";
import "./assets/normalize.css";
import "./assets/style.css";
import "./assets/style.scss";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { store, persistor } from "./redux/store/store";



ReactDOM.render(
  <BrowserRouter>
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <React.StrictMode>
          <App />
        </React.StrictMode>
      </PersistGate>
    </Provider>
  </BrowserRouter>,
  document.getElementById("root")
);
