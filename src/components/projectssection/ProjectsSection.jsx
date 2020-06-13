import React from "react";
import "./ProjectsSection.css";
import { Project } from "./Project";

export const ProjectsSection = () => {
  return (
    <div className="projects-section">
      <h2 className="projects-title">My latest projects</h2>
      <Project />
    </div>
  );
};
