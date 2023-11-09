import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/home/home";
import Project from "./pages/project/project";
import About from "./pages/about/about";
import Contact from "./components/contact/contact";
import HeaderNav from "./components/header/header-nav";
import SideNav from "./components/sidebar/sidenav";

function App() {
  return (
    <>
      <BrowserRouter>
        <HeaderNav />

        <Routes>
          <Route path="/" index element={<Home />} />
          <Route path="/projects" element={<Project />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>

        <SideNav />
      </BrowserRouter>
    </>
  );
}

export default App;
