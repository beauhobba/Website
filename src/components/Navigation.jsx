import React from "react";
import { NavLink } from "react-router-dom";
import Resume from "./modals/Resume";
import {BrowserView, MobileView} from 'react-device-detect';
import { FaHome, FaMoneyBillWave, FaPhoneAlt, FaKiwiBird, FaBlogger, FaPeopleCarry, FaAddressCard, FaLaptopCode } from "react-icons/fa";
import { FaGamepad } from "react-icons/fa";


function Navigation() {
  return (
    <div className="navigation" >
      <BrowserView>
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
              <li className="nav-item">
                <div className="nav-link" >
                <Resume/>
                  </div>
              </li>
              <li className="nav-item">
                <div className="nav-link" >
                <a href='/resume_2025.pdf' download>Download</a>
                  </div>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      </BrowserView>
      <MobileView>
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
                <FaHome style={{width: 30}}/>
                  <span className="sr-only">(current)</span>
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/about">
                <FaAddressCard style={{width: 30}}/>
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/skills">
                <FaLaptopCode style={{width: 30}}/>
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink className="nav-link" to="/contact">
                <FaPhoneAlt style={{width: 30}}/>
                </NavLink>
              </li>
              <li className="nav-item">
                <div className="nav-link" >
                <Resume/>
                  </div>
              </li>
            </ul>
          </div>
        </div>
      </nav>



      </MobileView>

    </div>
  );
}

export default Navigation;
