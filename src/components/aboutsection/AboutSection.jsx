import React from "react";
import "./AboutSection.css";
import { SkillsSection } from "../skillssection/SkillsSection";

export const AboutSection = () => {
  return (
    <div className="about-section">
      <h2 className="about-title">Some things about me</h2>
      <SkillsSection />
    </div>
  );
};
