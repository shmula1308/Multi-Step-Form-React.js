import React from "react";
import classes from "./FormUserDetails.module.css";

const FormUserDetails = (props) => {
  return (
    <div className={classes.controls}>
      <div className={classes.control}>
        <input
          type="text"
          id="firstName"
          placeholder="First Name"
          onChange={props.firstNameChange}
          value={props.fName}
        />
      </div>
      <div className={classes.control}>
        <input
          type="text"
          id="lastName"
          placeholder="Last Name"
          onChange={props.lastNameChange}
          value={props.lName}
        />
      </div>
      <div className={classes.control}>
        <input
          type="text"
          id="email"
          placeholder="Email"
          onChange={props.emailChange}
          value={props.email}
        />
      </div>
    </div>
  );
};

export default FormUserDetails;
