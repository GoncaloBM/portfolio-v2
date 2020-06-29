import React from "react";
import "./EndSection.css";

export const EndSection = () => {
  return (
    <div className="end-section">
      <div className="links-end">
        <div
          className="end-link github"
          onClick={() => window.open("https://github.com/GoncaloBM", "_blank")}
        ></div>
        <div
          className="end-link linkedin"
          onClick={() =>
            window.open("https://www.linkedin.com/in/goncalomira/", "_blank")
          }
        ></div>
      </div>
      <h2 className="end-title">2020 © Gonçalo Beirão de Mira</h2>
    </div>
  );
};
