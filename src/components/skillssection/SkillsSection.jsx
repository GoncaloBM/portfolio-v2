import React from "react";
import "./SkillsSection.css";
import { Skill } from "./Skill";
import HTMLLogo from "../../Images/HTML.png";
import CSSLogo from "../../Images/CSS.png";
import JavascriptLogo from "../../Images/Javascript.png";
import ReactjsLogo from "../../Images/Reactjs.png";
import ReactNativeLogo from "../../Images/Reactnative.png";
import SassLogo from "../../Images/SASS.png";
import BootstrapLogo from "../../Images/Bootstrap.png";
import MaterialUILogo from "../../Images/material-ui.png";
import NodejsLogo from "../../Images/Nodejs.png";
import MySqlLogo from "../../Images/MySql.png";
import RestLogo from "../../Images/restapi.png";
import GitLogo from "../../Images/Git.png";
import GraphQLLogo from "../../Images/graphQL.png";
import ApolloLogo from "../../Images/apollo.png";
import CypressLogo from "../../Images/cypress.png";
import ReduxLogo from "../../Images/redux.png";
import ReduxSagas from "../../Images/redux-sagas.png";

export const SkillsSection = React.forwardRef((props, ref) => {
  const skills = [
    { name: "HTML", image: HTMLLogo },
    { name: "CSS", image: CSSLogo },
    { name: "Javascript", image: JavascriptLogo },
    { name: "React.js", image: ReactjsLogo },
    { name: "React Native", image: ReactNativeLogo },
    { name: "Redux", image: ReduxLogo },
    { name: "Redux Sagas", image: ReduxSagas },
    { name: "Cypress", image: CypressLogo },
    { name: "Sass", image: SassLogo },
    { name: "Bootstrap", image: BootstrapLogo },
    { name: "Material-UI", image: MaterialUILogo },
    { name: "Node.js", image: NodejsLogo },
    { name: "GraphQL", image: GraphQLLogo },
    { name: "Apollo", image: ApolloLogo },
    { name: "MySQL", image: MySqlLogo },
    { name: "Rest-API", image: RestLogo },
    { name: "GIT / Github", image: GitLogo },
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
