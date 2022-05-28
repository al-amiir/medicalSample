import React from "react";
import "./homePage.css";
import gardenImage from "../../assets/images/garden.png";
import leafImage from "../../assets/images/leaf.png";
import labImage from "../../assets/images/lab.jpg";
import homeIntroImage from "../../assets/images/homeIntro.jpg";

export const HomePage = () => {
  return (
    <div className="homePage">
      <div className="homePage_intro">
        <img className="homePage_intro-image" src={homeIntroImage} alt="" />
        <p className="homePage_intro-text">
          We empower the fight for health and wellbeing as a{" "}
          <span className="homePage_intro-text-span">human right.</span>
        </p>
      </div>
    </div>
  );
};
