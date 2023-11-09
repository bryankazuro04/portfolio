import React from "react";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./style.css";
import { faAddressCard, faBarsProgress, faEnvelope, faHouse } from "@fortawesome/free-solid-svg-icons";

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
              <FontAwesomeIcon icon={faHouse} />
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
              <FontAwesomeIcon icon={faBarsProgress} />
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
              <FontAwesomeIcon icon={faAddressCard} />
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
              <FontAwesomeIcon icon={faEnvelope} />
            </NavLink>
          </div>
        </nav>
      </aside>
    </>
  );
}

export default SideNav;
