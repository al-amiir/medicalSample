import React from "react";
import "./homePage.css";

import homeIntroImage from "../../assets/images/homeIntro.jpg";
import orangeMedicineImage from "../../assets/images/orangeMedicine.jpg";
import microscobImage from "../../assets/images/microscob.jpg";
import coloredTabs from "../../assets/images/coloredTabs.jpg";
import medicalPlantImage1 from "../../assets/images/medicalPlant1.png";
import medicalPlantImage2 from "../../assets/images/medicalPlant2.png";

export const HomePage = () => {
  return (
    <div className="homePage">
      <img
        className="homePage_medicalImages-1"
        src={medicalPlantImage2}
        alt=""
      />
      {/* <img
        className="homePage_medicalImages-2"
        src={medicalPlantImage1}
        alt=""
      /> */}
      {/* Intro  */}
      <div className="homePage_intro">
        <p className="homePage_intro-text">
          We empower the fight for health and wellbeing as a{" "}
          <span className="homePage_intro-text-span">human right.</span>
        </p>
        <img className="homePage_intro-image" src={homeIntroImage} alt="" />
      </div>
      {/* Section 1  */}
      <div className="homePage_section-1">
        <img src={orangeMedicineImage} alt="" />
        <p>
          <h2>Lorem ipsum dolor</h2>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Id eos
          incidunt porro, laboriosam sed ipsa, dolor quibusdam, reprehenderit
          minima corrupti quod? Fuga perspiciatis architecto harum incidunt vel
          quasi et soluta.
        </p>
      </div>
      {/* Section 2  */}
      <div className="homePage_section-1">
        <p>
          <h2>Lorem ipsum dolor</h2>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Id eos
          incidunt porro, laboriosam sed ipsa, dolor quibusdam, reprehenderit
          minima corrupti quod? Fuga perspiciatis architecto harum incidunt vel
          quasi et soluta.
        </p>
        <img src={microscobImage} alt="" />
      </div>
      {/* Section 3  */}
      <div className="homePage_section-1">
        <img src={coloredTabs} alt="" />
        <p>
          <h2>Lorem ipsum dolor</h2>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Id eos
          incidunt porro, laboriosam sed ipsa, dolor quibusdam, reprehenderit
          minima corrupti quod? Fuga perspiciatis architecto harum incidunt vel
          quasi et soluta.
        </p>
      </div>
    </div>
  );
};
