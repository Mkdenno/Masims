import React, { useState } from "react";
import { FaBars } from "react-icons/fa";
import { FaTimes } from "react-icons/fa";

import "./navbar.css";

const NavBar = () => {
  const [scroll, isScroll] = useState(0);
  const [hide, isHide] = useState(false);

  const handleToggleButton=()=> isHide(!hide)

  window.addEventListener("scroll", () => {
    if (window.scrollY > 0) {
      isScroll(1);
    } else {
      isScroll(0);
    }
  });
  return (
    <nav
      style={{
        backgroundColor: scroll === 1 ? "white" : "#1F3E76",
      }}
    >
      <div className="container Nav">
        <div className="navbars">
          <div
            style={{
              color: scroll === 1 ? "black" : "white",
            }}
          >
            <h3>Masiror</h3>
            {/* <img src="./images/logo.svg" alt="" /> */}
          </div>
          <div className={ hide ?"links active": "links"}>
            <ul
              style={{
                color: scroll === 1 ? "black" : "white",
              }}
            >
              <li>
                <span className="homelink">Home</span>
              </li>
              <li>Features</li>
              <li>Testimonial</li>
              <li>Pricing</li>
              <i onClick={handleToggleButton} u className="timesicon">
                <FaTimes />
              </i>
            </ul>
          </div>
          <div>
            <button
              style={{
                backgroundColor: scroll === 1 ? "#1F3E76" : "white",
                color: scroll === 1 ? "#FFFFFF" : "black",
              }}
              className={scroll === 1 ? "navbtn  active" : "navbtn"}
            >
              Get started
            </button>
          </div>
          <span
            onClick={handleToggleButton}
            style={{
              color: scroll === 1 ? "black" : "white",
            }}
            className="navbaricon"
          >
            <FaBars />
          </span>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
