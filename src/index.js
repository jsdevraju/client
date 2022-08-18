import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import "./index.css";
import App from "./App";
import { Provider } from "react-redux";
import {store} from "./store/store";
import { ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <App />
        <ToastContainer
          position="top-center"
          hideProgressBar={true}
          autoClose={2500}
        />
      </Router>
    </Provider>
  </React.StrictMode>
)
