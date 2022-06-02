import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <img
        className="footer_logo-image"
        src="https://img.icons8.com/external-filled-outline-satawat-anukul/100/000000/external-medical-medical-filled-outline-filled-outline-satawat-anukul-46.png"
      />
      <div className="footer_links">
        <div className="footer_links-block">
          <a href="#">Home</a>
          <a href="#">About</a>
          <a href="#">Products</a>
        </div>
        <div className="footer_links-block">
          <a href="#">Connect</a>
          <a href="#">Careers</a>
        </div>
      </div>
      <div className="footer_newsLetter">
        <p>NEWSLATER</p>
        <input type="email" placeholder="Write Your Email" />
      </div>
    </div>
  );
};

export default Footer;
