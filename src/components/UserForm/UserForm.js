import React, { useState } from "react";
import FormUserDetails from "./FormUserDetails";
import FormPersonalDetails from "./FormPersonalDetails";
import Confirm from "../Confirm/Confirm";
import Success from "../Success/Success";
import Button from "../UI/Button";
import Header from "../Header/Header";
import classes from "./UserForm.module.css";

const UserForm = (props) => {
  const [userData, setUserData] = useState({
    step: 0,
    fName: "",
    lName: "",
    email: "",
    occupation: "",
    city: "",
    bio: "",
  });

  const [step, setStep] = useState(0);

  const firstNameHandler = (ev) => {
    setUserData((prevUserData) => {
      return { ...prevUserData, fName: ev.target.value };
    });
  };

  const lastNameHandler = (ev) => {
    setUserData((prevUserData) => {
      return { ...prevUserData, lName: ev.target.value };
    });
  };

  const emailHandler = (ev) => {
    setUserData((prevUserData) => {
      return { ...prevUserData, email: ev.target.value };
    });
  };

  const occupationHandler = (ev) => {
    setUserData((prevUserData) => {
      return { ...prevUserData, occupation: ev.target.value };
    });
  };

  const cityHandler = (ev) => {
    setUserData((prevUserData) => {
      return { ...prevUserData, city: ev.target.value };
    });
  };

  const bioHandler = (ev) => {
    setUserData((prevUserData) => {
      return { ...prevUserData, bio: ev.target.value };
    });
  };

  const nextStepHandler = () => {
    setStep((prevStep) => {
      return prevStep + 1;
    });
  };
  const prevStepHandler = () => {
    setStep((prevStep) => {
      return prevStep - 1;
    });
  };

  const firstStep = step === 0 ? "1" : "";
  const secondStep = step === 1 ? "2" : "";
  const thirdStep = step === 2 ? "3" : "";
  const fourthStep = step === 3 ? "4" : "";

  const continueBtn = step < 2 ? "show" : "";
  const backBtn = step > 0 && step < 3 ? "show" : "";
  const confirmBtn = step === 2 ? "show" : "";

  return (
    <React.Fragment>
      <Header step={step} />
      <div className={`${classes["user-form"]}`}>
        <form>
          {firstStep && (
            <FormUserDetails
              firstNameChange={firstNameHandler}
              lastNameChange={lastNameHandler}
              emailChange={emailHandler}
              fName={userData.fName}
              lName={userData.lName}
              email={userData.email}
            />
          )}
          {secondStep && (
            <FormPersonalDetails
              occupationChange={occupationHandler}
              cityChange={cityHandler}
              bioChange={bioHandler}
              occupation={userData.occupation}
              city={userData.city}
              bio={userData.bio}
            />
          )}
          {thirdStep && (
            <Confirm
              fName={userData.fName}
              lName={userData.lName}
              email={userData.email}
              occupation={userData.occupation}
              city={userData.city}
              bio={userData.bio}
            />
          )}
          {fourthStep && <Success />}

          <div className={classes.action}>
            {continueBtn && <Button onClick={nextStepHandler}>Continue</Button>}
            {confirmBtn && (
              <Button onClick={nextStepHandler}>Confirm & Continue</Button>
            )}
            {backBtn && (
              <Button className="backBtn" onClick={prevStepHandler}>
                Back
              </Button>
            )}
          </div>
        </form>
      </div>
    </React.Fragment>
  );
};

export default UserForm;
