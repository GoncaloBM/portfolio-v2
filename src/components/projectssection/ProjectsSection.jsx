import React from "react";
import "./ProjectsSection.css";
import { Project } from "./Project";
import wwtbm from "./images/wwtbm.png";

export const ProjectsSection = () => {
  return (
    <div className="projects-section">
      <h2 className="projects-title">My latest projects</h2>
      <Project
        image={wwtbm}
        title={"WWTBM"}
        description={"Everyone's unmistakable game."}
        tags={["HTML", "CSS", "Javascript", "React.js", "REST"]}
      />
    </div>
  );
};
