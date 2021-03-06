import React from "react";
import "./ProjectsSection.css";
import { Project } from "./Project";
import wwtbm from "./images/wwtbm.png";
import swizLogo from "./images/swiz-logo.jpg";
import christmas from "./images/Christmas-Game.png";
import portfolio from "./images/portfolio.png";
import currentPortofolio from "./images/currentPortfolio.png";
import peacocktest from "./images/peacock.png";
import minesweeper from "./images/minesweeper.png";
import feeder from "./images/feeder.png";

export const ProjectsSection = React.forwardRef((props, ref) => {
  return (
    <div className="projects-section" ref={ref}>
      <h2 className="projects-title">My latest projects</h2>
      <div className="projects">
        <Project
          image={feeder}
          title={"My Baby's Feed "}
          description={
            "A Breastfeeding Diary, with authentication system to record all the babies' feeds. ON PROGRESS..."
          }
          tags={["React.js", "Node.js", "Express.js", "mySQL"]}
          githubLink={"https://github.com/GoncaloBM/feeder-counter"}
          liveLink={"https://www.goncalobmira.online/"}
        />
        <Project
          image={minesweeper}
          title={"Minesweeper "}
          description={
            "Classic Game that everyone has heard with database for the time records."
          }
          tags={["React.js", "Node.js", "Express.js", "mySQL"]}
          githubLink={"https://github.com/GoncaloBM/minesweeper"}
          liveLink={"https://goncalobm-minesweeper.netlify.app/"}
        />
        <Project
          image={peacocktest}
          title={"Image/Color TV Test "}
          description={
            "TV app to test images and background colors on TV's. This project was done to a real client in the streaming market."
          }
          tags={["React.js", "Node.js", "Express.js"]}
          githubLink={"https://github.com/GoncaloBM/peacock-constrast-test"}
          liveLink={"https://images-colors-tv-test.netlify.app/"}
        />
        <Project
          image={currentPortofolio}
          title={"Current Portfolio"}
          description={
            "This same page, evolution of the old portfolio with better desgin and backend module"
          }
          tags={[
            "HTML",
            "CSS",
            "Javascript",
            "React.js",
            "Node.js",
            "Express.js",
          ]}
          githubLink={"https://github.com/GoncaloBM/portfolio-v2"}
          liveLink={"https://goncalobm.com/"}
        />
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
          liveLink={"https://vibrant-goldwasser-3c2045.netlify.app/"}
        />
      </div>
    </div>
  );
});
