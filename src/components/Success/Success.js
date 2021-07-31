import React from "react";
import classes from "./Success.module.css";

const Success = (props) => {
  return (
    <div className={classes.success}>
      <h2>Thank you for your submission</h2>
      <span>You will get an email with further instructions</span>
    </div>
  );
};

export default Success;
