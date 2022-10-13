import React from "react";

const Navbar = () => {
  return (
    <nav className="navbar container">
      <h1 className="logo">
        <img src="/images/safe-click-logo.png" alt="LOGO" />
      </h1>
      <ul className="nav-links">
        <li>Beranda</li>
        <li>Fitur</li>
        <li>Contact Us</li>
      </ul>
    </nav>
  );
};

export default Navbar;
