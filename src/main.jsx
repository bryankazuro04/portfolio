import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Home from "./components/home/home";
import Project from "./components/project/project";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "./components/about/about";
import Contact from "./components/contact/contact";
import AOS from "aos";
import "aos/dist/aos.css";

AOS.init({ duration: 500 });

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Project />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
