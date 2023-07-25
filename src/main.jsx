import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import HeaderNav from "./components/header/header-nav.jsx";
import Jumbotron from "./components/jumbotron/jumbotron";
import SideNav from "./components/sidebar/sidenav";
import Project from "./components/project/project";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <HeaderNav />
    <main className="container-width">
      <Jumbotron />
      <Project />
    </main>
    <SideNav />
  </React.StrictMode>
);
