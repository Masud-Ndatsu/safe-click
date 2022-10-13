import React from "react";
import Navbar from "./Navbar";

const Header = () => {
  return (
    <header className="">
      <Navbar />
      <div className="hero container">
        <div className="img-wrapper">
          <img src="/images/safe-click-bg.png" alt="" />
          <div className="icon love">
            <img src="/icons/love.png" alt="" />
          </div>
          <div className="icon time">
            <img src="/icons/time.png" alt="" />
          </div>
          <div className="icon location">
            <img src="/icons/location.png" alt="" />
          </div>
          <div className="icon vector">
            <img src="/icons/vector.png" alt="" />
          </div>
          <div className="icon help">
            <img src="/icons/help.png" alt="" />
          </div>
          <div className="empty"></div>
        </div>
        <div className="hero-text">
          <h1>Solusi #DonasiTanpaWorry</h1>
          <p>
            Platform donasi pertama yang berfokus pada bantuan rutin yang aman
            dari <span>laman</span> dan <span>cara kamu</span> sendiri{" "}
          </p>
          <button className="btn">Contact Us</button>
        </div>
      </div>
    </header>
  );
};

export default Header;
