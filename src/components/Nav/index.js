import React from "react";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <nav>
      <h1>Karly Weatherstein</h1>
      <ul>
        {/* Home */}
        <li>
          <Link
            to="/"
            className={({ isActive }) => (isActive ? "tab-active" : "tab")}
          >
            Home
          </Link>
        </li>
        {/* About me */}
        <li>
          <Link
            to="/about"
            className={({ isActive }) => (isActive ? "tab-active" : "tab")}
          >
            About Me
          </Link>
        </li>
        {/* Portfolio */}
        <li>
          <Link
            to="/portfolio"
            className={({ isActive }) => (isActive ? "tab-active" : "tab")}
          >
            Portfolio
          </Link>
        </li>
        {/* Contact */}
        <li>
          <Link
            to="/contact"
            className={({ isActive }) => (isActive ? "tab-active" : "tab")}
          >
            Contact
          </Link>
        </li>
        {/* Resume */}
        <li>
          <Link
            to="/resume"
            className={({ isActive }) => (isActive ? "tab-active" : "tab")}
          >
            Resume
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
