import React from "react";
// import { Link } from 'react-router-dom';

function Nav(props) {
  const { contactSelected, setContactSelected } = props;

  return (
    <nav>
      <h1>Karly Weatherstein</h1>
      <ul>
        {/* Links to routes */}
        {/* <Link to="/login">Login</Link>
            <Link to="/signup">Signup</Link> */}
        {/* Home */}
        <li>
          <a href="#about" onClick={() => setContactSelected(false)}>
            Home
          </a>
        </li>
        {/* About me */}
        <li className={` ${contactSelected && "navActive"}`}>
          <span onClick={() => setContactSelected(true)}>About Me</span>
        </li>
        {/* Portfolio */}
        <li className={`${contactSelected && "navActive"}`}>
          <span
            onClick={() => {
              setContactSelected(false);
            }}
          >
            Portfolio
          </span>
        </li>
        {/* Contact */}
        <li className={`${contactSelected && "navActive"}`}>
          <span
            onClick={() => {
              setContactSelected(false);
            }}
          >
            Contact
          </span>
        </li>
        {/* Resume */}
        <li className={` ${contactSelected && "navActive"}`}>
          <span
            onClick={() => {
              setContactSelected(false);
            }}
          >
            Resume
          </span>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
