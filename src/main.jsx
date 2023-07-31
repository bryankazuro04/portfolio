import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Jumbotron from "./components/jumbotron/jumbotron";
import Project from "./components/project/project";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Education from "./components/education/education";
import Contact from "./components/contact/contact";
import AOS from "aos";
import "aos/dist/aos.css";

AOS.init({ duration: 1000 });

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <switch>
        <Route index exact path="/" Component={Jumbotron} />
        <Route exact path="/projects" element={<Project />} />
        <Route exact path="/education" element={<Education />} />
        <Route exact path="/contact" element={<Contact />} />
      </switch>
    </BrowserRouter>
  </React.StrictMode>
);
