import React from "react";
import "./App.module.css";
import UserForm from "./components/UserForm/UserForm";
import classes from "./App.module.css";

const App = () => {
  return (
    <div className={classes.app}>
      <UserForm />
    </div>
  );
};

export default App;
