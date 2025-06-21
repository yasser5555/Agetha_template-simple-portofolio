import React, { useState } from "react";
import { NavLink } from "react-router-dom";
// import './Navbar.css';

export default function Navbar() {
  const [opened, SetOpened] = useState(false);

  const Close_menu = () => {
    SetOpened(false);
  };

  const Handle_menu = () => {
    SetOpened(!opened);
  };

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-black overflow-hidden">
        <div className="container-fluid">
          <NavLink className="navbar-brand" onClick={Close_menu} to="/">
            <i
              className="fa-brands fa-wolf-pack-battalion fs-1"
              style={{ color: "#b22222" }}
            ></i>
          </NavLink>

          <button
            onClick={Handle_menu}
            className="navbar-toggler text-danger"
            type="button"
          >
            <span className="navbar-toggler-icon text-danger"></span>
          </button>

          <div
            className={`collapse d-lg-flex justify-content-lg-end navbar-collapse ${
              opened ? "show" : ""
            }`}
            id="navbarNav"
          >
            <ul className="navbar-nav">
              <li className="nav-item">
                <NavLink
                  className={({ isActive }) =>
                    `nav-link text-light text-capitalize ${isActive ? 'Active' : ''}`
                  }
                  to="/"
                  onClick={Close_menu}
                >
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className={({ isActive }) =>
                    `nav-link text-light text-capitalize ${isActive ? 'Active' : ''}`
                  }
                  to="/services"
                  onClick={Close_menu}
                >
                  services
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className={({ isActive }) =>
                    `nav-link text-light text-capitalize ${isActive ? 'Active' : ''}`
                  }
                  to="/about"
                  onClick={Close_menu}
                >
                  about
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className={({ isActive }) =>
                    `nav-link text-light text-capitalize ${isActive ? 'Active' : ''}`
                  }
                  to="/contact"
                  onClick={Close_menu}
                >
                  Contact
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
