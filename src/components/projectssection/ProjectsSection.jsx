import React from "react";
import "./ProjectsSection.css";
import { Project } from "./Project";
import wwtbm from "./images/wwtbm.png";
import swizLogo from "./images/swiz-logo.jpg";
import christmas from "./images/Christmas-Game.png";

export const ProjectsSection = () => {
  return (
    <div className="projects-section">
      <h2 className="projects-title">My latest projects</h2>
      <div className="projects">
        <Project
          image={wwtbm}
          title={"WWTBM"}
          description={"Everyone's unmistakable game."}
          tags={["HTML", "CSS", "Javascript", "React.js", "REST"]}
        />
        <Project
          image={swizLogo}
          title={"Swizland Blog"}
          description={
            "A blog about adventure, culture and relaxing in the beatufil country of Switzerland."
          }
          tags={["HTML", "CSS", "Javascript", "Ajax"]}
        />
        <Project
          image={christmas}
          title={"Memory Christma's Game"}
          description={"A memory game with a Christmas theme."}
          tags={["HTML", "CSS", "jQuery"]}
        />
      </div>
    </div>
  );
};
