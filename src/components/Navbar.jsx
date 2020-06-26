import React from "react";
import "./Navbar.css";
import { Logo } from "./Logo";

export const Navbar = ({ scrollToContent }) => {
  return (
    <div className="navbar">
      <div className="logo">
        <Logo />
        <div className="logo-title">Gonçalo Beirão de Mira</div>
      </div>
      <div className="links">
        <div className="link" onClick={() => scrollToContent(0)}>
          About
        </div>
        <div className="link">Skills</div>
        <div className="link">Projects</div>
        <div className="link">Contact</div>
      </div>
    </div>
  );
};
