import React from "react";

export const Skill = ({ title, image }) => {
  return (
    <div className="skill">
      <div
        className="skill-image"
        style={{ backgroundImage: `url(${image})` }}
      ></div>
      <div className="skill-name">{title}</div>
    </div>
  );
};
