import React from "react";
import { NavLink } from "react-router-dom";

function Navigation() {
  return (
    <div className="navigation" >
      <nav className="navbar navbar-expand navbar-light"  style={{
      backgroundColor: '#EDEDED',
    }}>
        <div className="container">
          <NavLink className="navbar-brand" to="/">
            Beau Hobba
          </NavLink>
          <div>
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <NavLink className="nav-link" to="/">
                  Home
                  <span className="sr-only">(current)</span>
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/about">
                  About
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/skills">
                  Skills
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink className="nav-link" to="/contact">
                  Contact
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/blog">
                  Blog
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/animals">
                  Animals
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navigation;
