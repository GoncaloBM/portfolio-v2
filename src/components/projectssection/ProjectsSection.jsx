import React from "react";
import "./ProjectsSection.css";
import { Project } from "./Project";
import wwtbm from "./images/wwtbm.png";
import swizLogo from "./images/swiz-logo.jpg";
import christmas from "./images/Christmas-Game.png";
import portfolio from "./images/portfolio.png";

export const ProjectsSection = React.forwardRef((props, ref) => {
  return (
    <div className="projects-section" ref={ref}>
      <h2 className="projects-title">My latest projects</h2>
      <div className="projects">
        <Project
          image={wwtbm}
          title={"WWTBM"}
          description={"Everyone's unmistakable game."}
          tags={["HTML", "CSS", "Javascript", "React.js", "REST"]}
          githubLink={"https://github.com/GoncaloBM/WWTBM"}
          liveLink={"https://competent-archimedes-29ed49.netlify.app/"}
        />
        <Project
          image={swizLogo}
          title={"Swizland Blog"}
          description={
            "A blog about adventure, culture and relaxing in the beatufil country of Switzerland."
          }
          tags={["HTML", "CSS", "Javascript", "Ajax"]}
          githubLink={"https://github.com/GoncaloBM/swisscheeseblog"}
          liveLink={"https://goncalobm.github.io/swisscheeseblog/"}
        />
        <Project
          image={christmas}
          title={"Memory Christma's Game"}
          description={"A memory game with a Christmas theme."}
          tags={["HTML", "CSS", "jQuery"]}
          liveLink={"https://goncalobm.github.io/Christma-Game/"}
          githubLink={"https://github.com/GoncaloBM/Christma-Game"}
        />
        <Project
          image={portfolio}
          title={"My First Portfolio"}
          description={"This was my first portfolio ever."}
          tags={["HTML", "CSS", "Javascript", "React.js"]}
          githubLink={"https://github.com/GoncaloBM/react-portfolio"}
        />
      </div>
    </div>
  );
});
