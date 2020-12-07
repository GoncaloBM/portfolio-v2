import React, { useState, useEffect } from "react";
import "./Navbar.css";
import { Logo } from "./Logo";
import { BurgerMenu } from "./BurgerMenu/BurgerMenu";
import { Menu } from "./BurgerMenu/Menu";

export const Navbar = ({ scrollToContent }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const changeMenu = () => {
    setMenuOpen(!menuOpen);
  };
  const sections = [
    { name: "About", scrollTo: 0 },
    { name: "Skills", scrollTo: 1 },
    { name: "Projects", scrollTo: 2 },
    { name: "Contacts", scrollTo: 3 },
  ];

  useEffect(() => {
    console.log(window.innerWidth);
  }, []);
  return (
    <div className="navbar">
      <div className="logo">
        <Logo />
        <div className="logo-title">Gonçalo Beirão de Mira</div>
      </div>
      <div className="links">
        {window.innerWidth > 550 ? (
          sections.map((section, index) => {
            return (
              <div
                className="link"
                onClick={() => scrollToContent(section.scrollTo)}
              >
                {section.name}
              </div>
            );
          })
        ) : (
          <>
            <BurgerMenu changeMenu={changeMenu} />
            {menuOpen && (
              <Menu sections={sections} scrollToContent={scrollToContent} />
            )}
          </>
        )}
      </div>
    </div>
  );
};
