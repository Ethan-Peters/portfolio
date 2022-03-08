import React from "react";
import "./Footer.css";
import Logo from "../../assets/images/logo.svg";

const Footer = () => {
return (
  <nav className="footer">
    <ul className="footer--link">
      <li className="footer--link-item">Home</li>
      <li className="footer--link-item">Projects</li>
      <li className="footer--link-item">Resume</li>
      <li className="footer--link-item">Calendar</li>
      <li className="footer--link-item">Contact</li>
    </ul>
  </nav>
)};
export default Footer;