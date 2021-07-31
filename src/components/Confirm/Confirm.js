import React from "react";
import classes from "./Confirm.module.css";

const Confirm = (props) => {
  return (
    <div className={classes.confirm}>
      <div className={`${classes["user-data"]}`}>
        <p>First Name:</p>
        <span>{props.fName}</span>
      </div>
      <div className={`${classes["user-data"]}`}>
        <p>Last Name:</p>
        <span>{props.lName}</span>
      </div>
      <div className={`${classes["user-data"]}`}>
        <p>Email:</p>
        <span>{props.email}</span>
      </div>
      <div className={`${classes["user-data"]}`}>
        <p>Occupation:</p>
        <span>{props.occupation}</span>
      </div>
      <div className={`${classes["user-data"]}`}>
        <p>City:</p>
        <span>{props.city}</span>
      </div>
      <div className={`${classes["user-data"]}`}>
        <p>Bio:</p>
        <span>{props.bio}</span>
      </div>
    </div>
  );
};

export default Confirm;
