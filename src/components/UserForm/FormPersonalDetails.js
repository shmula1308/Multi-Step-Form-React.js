import React from "react";
import classes from "./FormPersonalDetails.module.css";

const FormPersonalDetails = (props) => {
  return (
    <div className={classes.controls}>
      <div className={classes.control}>
        <input
          type="text"
          placeholder="Occupation"
          onChange={props.onChange("occupation")}
          value={props.occupation}
        />
      </div>
      <div className={classes.control}>
        <input
          type="text"
          placeholder="City"
          onChange={props.onChange("city")}
          value={props.city}
        />
      </div>
      <div className={classes.control}>
        <input
          type="text"
          placeholder="Bio"
          onChange={props.onChange("bio")}
          value={props.bio}
        />
      </div>
    </div>
  );
};

export default FormPersonalDetails;
