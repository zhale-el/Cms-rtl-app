import React from "react";
import "./AboutUsBox.css";
const AboutUsBox = ({ title, des, icon }) => {
  return (
    <div class="col-6">
      <div class="about-us__box">
        <div class="about-us__box-right">
          <i class="far fa-copyright about-us__icon"></i>
        </div>
        <div class="about-us__box-left">
          <span class="about-us__box-title">{title}</span>
          <span class="about-us__box-text">{des}</span>
        </div>
      </div>
    </div>
  );
};

export default AboutUsBox;
