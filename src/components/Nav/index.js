import React from "react";
import { Link } from "react-router-dom";

function Nav() {
  //   const { contactSelected, setContactSelected } = props;

  return (
    <nav>
      <h1>Karly Weatherstein</h1>
      <ul>
        {/* Home */}
        <li>
          <Link to="/">Home</Link>
        </li>
        {/* About me */}
        <li>
          <Link to="/about">About Me</Link>
        </li>
        {/* Portfolio */}
        <li>
          <Link to="/portfolio">Portfolio</Link>
        </li>
        {/* Contact */}
        <li>
          <Link to="/contact">Contact</Link>
        </li>
        {/* Resume */}
        <li>
          <Link to="/resume">Resume</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
