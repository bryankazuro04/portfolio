import React from "react";
import { NavLink } from "react-router-dom";
import "./style.css";

function SideNav() {
  return (
    <>
      <aside>
        <nav>
          <div className="nav-item">
            <NavLink
              to="/"
              style={({ isActive }) => {
                return {
                  color: isActive ? "white" : "",
                };
              }}
              aria-label="Link menuju halaman page home"
            >
              <span>home</span>
              <i className="fa-solid fa-house"></i>
            </NavLink>
          </div>
          <div className="nav-item">
            <NavLink
              to="/projects"
              style={({ isActive }) => {
                return {
                  color: isActive ? "white" : "",
                };
              }}
              aria-label="Link menuju halaman page project yang pernah dibuat"
            >
              <span>Projects</span>
              <i className="fa-solid fa-bars-progress"></i>
            </NavLink>
          </div>
          <div className="nav-item">
            <NavLink
              to="/about"
              style={({ isActive }) => {
                return {
                  color: isActive ? "white" : "",
                };
              }}
              aria-label="Link menuju halaman page pendidikan yang ditempuh dan skill yang dimiliki"
            >
              <span>About</span>
              <i className="fa-solid fa-address-card"></i>
            </NavLink>
          </div>
          <div className="nav-item">
            <NavLink
              to="/contact"
              style={({ isActive }) => {
                return {
                  color: isActive ? "white" : "",
                };
              }}
              aria-label="Link menuju halaman page contact untuk melakukan kerja sama dengan pemilik web"
            >
              <span>contact</span>
              <i className="fa-solid fa-envelope"></i>
            </NavLink>
          </div>
        </nav>
      </aside>
    </>
  );
}

export default SideNav;
