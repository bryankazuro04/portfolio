import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Jumbotron from "./components/jumbotron/jumbotron";
import Project from "./components/project/project";
import { BrowserRouter, Route, Routes } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Jumbotron />} />
        <Route path="/projects" element={<Project />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
