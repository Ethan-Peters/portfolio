import React from "react";
import "./Navbar.css";
import Logo from "../../assets/images/greater-than-sign-1.png";

const Navbar = ({ sticky }) => {
return (
  <nav className={sticky ? "navbar navbar-sticky" : "navbar"}>
    <div className="navbar--logo-holder">
      {sticky ? <img src={Logo} alt="logo" className="navbar--logo" /> : null}
      <h1>Jonathan Peters</h1>
    </div>
    <ul className="navbar--link">
      <li className="navbar--link-item">Home</li>
      <li className="navbar--link-item">Projects</li>
      <li className="navbar--link-item">Resume</li>
      <li className="navbar--link-item">Calendar</li>
      <li className="navbar--link-item">Contact</li>
    </ul>
  </nav>
)};
export default Navbar;