import React from "react";
import "./header.css";
const Header = () => {
  return (
    <div className="header">
      <div className="header_logo">
        <img
          className="header_logo-image"
          src="https://img.icons8.com/external-filled-outline-satawat-anukul/40/000000/external-medical-medical-filled-outline-filled-outline-satawat-anukul-46.png"
        />
        <a href="#" className="header_logo-text">
          Medicines
        </a>
      </div>
      <div className="header_links">
        <a href="#">Home</a>
        <a href="#">About</a>
        <a href="#">Products</a>
        <a href="#">Connect</a>
        <a href="#">Career</a>
      </div>
    </div>
  );
};

export default Header;
