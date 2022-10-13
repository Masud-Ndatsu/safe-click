import React from "react";

const Footer = () => {
  return (
    <footer id="footer">
      <div className="flex">
        <div className="first">
          <h3 className="logo">
            <img src="/images/safe-click-logo.png" alt="LOGO" />
          </h3>
          <p>
            QP office, tanjung mas raya blok B1 no.44, Jagakarsa, Jakarta
            Selatan 12530
          </p>
          <div className="icons">
            <p href="#">
              <img src="/icons/youtube.png" alt="" />
            </p>
            <p href="#">
              <img src="/icons/instagram.png" alt="" />
            </p>
            <p href="#">
              <img src="/icons/vcall.png" alt="" />
            </p>
          </div>
        </div>
        <div className="second">
          <h3>Seputar KawanBantu</h3>
          <p>Beranda</p>
          <p>Fitur</p>
          <p>Tentang Kami</p>
          <p>Contact Us</p>
        </div>
        <div className="third">
          <h3>Kontak Kami</h3>
          <p>+628231264835</p>
          <p>kawanbantu@gmail.com </p>
        </div>
        <div className="forth">
          <h3>Platform Berdonasi</h3>
          <p>Lorem, ipsum dolor.</p>
          <p>Lorem, ipsum dolor.</p>
          <p>Lorem, ipsum dolor.</p>
        </div>
      </div>
      <p className="copyright">
        © Copyright 2022 KawanBantu. All rights reserved
      </p>
    </footer>
  );
};

export default Footer;
