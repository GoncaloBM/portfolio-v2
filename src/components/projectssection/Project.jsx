import React from "react";

export const Project = ({ image, title, description, tags }) => {
  return (
    <div className="project-tile">
      <div className="project-image"></div>
      <div className="project-title">WWTBM</div>
      <div className="project-description">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deserunt sed
        nemo labore consequatur provident minima, ipsum animi nihil sint,
        obcaecati iusto qui est suscipit debitis unde ratione id magnam
        voluptatum!
      </div>
      <div className="tags">
        <div className="project-tag">HTML</div>
      </div>
    </div>
  );
};
