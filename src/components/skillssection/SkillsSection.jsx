import React from "react";
import "./SkillsSection.css";
import { Skill } from "./Skill";
import HTMLLogo from "../../Images/HTML.png";
import CSSLogo from "../../Images/CSS.png";
import JavascriptLogo from "../../Images/Javascript.png";
import ReactjsLogo from "../../Images/Reactjs.png";
import ReactNativeLogo from "../../Images/Javascript.png";
import SassLogo from "../../Images/SASS.png";
import BootstrapLogo from "../../Images/Bootstrap.png";
import NodejsLogo from "../../Images/Nodejs.png";
import MySqlLogo from "../../Images/MySql.png";
import RestLogo from "../../Images/restapi.png";

export const SkillsSection = React.forwardRef((props, ref) => {
  const skills = [
    { name: "HTML", image: HTMLLogo },
    { name: "CSS", image: CSSLogo },
    { name: "Javascript", image: JavascriptLogo },
    { name: "React.js", image: ReactjsLogo },
    { name: "Sass", image: SassLogo },
    { name: "Bootstrap", image: BootstrapLogo },
    { name: "Node.js", image: NodejsLogo },
    { name: "MySQL", image: MySqlLogo },
    { name: "Rest-API", image: RestLogo },
  ];

  return (
    <div className="skills-content" ref={ref}>
      <h2 className="skills-title"> Skills</h2>
      <div className="skills">
        {skills.map((skill) => {
          return <Skill image={skill.image} title={skill.name} />;
        })}
      </div>
    </div>
  );
});
