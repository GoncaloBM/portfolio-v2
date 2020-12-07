import React from "react";

export const Menu = ({ sections, scrollToContent }) => {
  return (
    <div className="navbar-menu">
      {sections.map((section, index) => {
        return (
          <div
            className="link"
            onClick={() => scrollToContent(section.scrollTo)}
          >
            {section.name}
          </div>
        );
      })}
    </div>
  );
};
