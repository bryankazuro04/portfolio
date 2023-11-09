import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "./loader.css";
import AOS from "aos";
import "aos/dist/aos.css";
import App from "./App";

AOS.init({ duration: 500 });

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
