import React from "react";
import "./Navbar.css";

export const Navbar = () => {
  return (
    <div className="navbar">
      <div className="logo"></div>
      <div className="links">
          <div className="link">About</div>
          <div className="link">Skills</div>
          <div className="link">Projects</div>
          <div className="link">Contact</div>
      </div>
    </div>
  );
};
