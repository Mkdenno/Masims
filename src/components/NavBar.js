import React from "react";
import './navbar.css'

const NavBar = () => {
  return (
    <nav>
    <div className="container Nav">
      <div className="navbars">
        <div>
          <img src="./images/logo.svg" alt="" />
          
        </div>
        <div className="links">
          <ul>
          <li><span className="homelink">Home</span></li>
          <li>Features</li>
          <li>Testimonial</li>
          <li>Pricing</li>
          </ul>
        </div>
        <div >
          <button className="navbtn">Get started</button>
          </div>
      </div>
      </div>
      </nav>
  );
};

export default NavBar;
