import React from "react";
import classes from "./FormPersonalDetails.module.css";

const FormPersonalDetails = (props) => {
  return (
    <div className={classes.controls}>
      <div className={classes.control}>
        <input
          type="text"
          placeholder="Occupation"
          onChange={props.occupationChange}
          value={props.occupation}
        />
      </div>
      <div className={classes.control}>
        <input
          type="text"
          placeholder="City"
          onChange={props.cityChange}
          value={props.city}
        />
      </div>
      <div className={classes.control}>
        <input
          type="text"
          placeholder="Bio"
          onChange={props.bioChange}
          value={props.bio}
        />
      </div>
    </div>
  );
};

export default FormPersonalDetails;
