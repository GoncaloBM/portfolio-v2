import React from "react";
import { hamburgerMenu } from "../../svg/svg";

export const BurgerMenu = ({ changeMenu }) => {
  return <div onClick={changeMenu}>{hamburgerMenu}</div>;
};
