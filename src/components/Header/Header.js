import React from "react";
import classes from "./Header.module.css";
import { GiHamburgerMenu } from "react-icons/gi";
const Header = ({ step }) => {
  let headerText = "Enter User Details";

  if (step === 1) {
    headerText = "Enter Personal Details";
  }
  if (step === 2) {
    headerText = "Confirm";
  }
  if (step === 3) {
    headerText = "Success";
  }

  return (
    <div className={classes.header}>
      <GiHamburgerMenu className={classes.burger} />
      <h1 className={classes.title}>{headerText}</h1>
    </div>
  );
};

export default Header;
