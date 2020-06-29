import React from "react";
import "./MainSection.css";
import cara from "../../Images/Cara.png";
import rocket from '../../Images/rocket.png'

export const MainSection = () => {
  return (
    <div className="content">
      <div className="title">Javascript Developer</div>
      <div className="text">Love to create beautiful stuff.</div>
      <div className="photo" style={{ backgroundImage: `url(${cara})` }}></div>
    </div>
  );
};
