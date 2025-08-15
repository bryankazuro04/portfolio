import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/index.scss";
import "./styles/loader.css";
import AOS from "aos";
import "aos/dist/aos.css";
import App from "./App";
import { Provider } from "react-redux";
import { store } from "./redux/store";

AOS.init({ duration: 500 });

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <App />
  </Provider>
);
