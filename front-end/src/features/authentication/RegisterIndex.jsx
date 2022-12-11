import React from "react";

// *Custom Hooks Imports*

// *API Services Imports*

// *Components*
import TopSpan from "./components/register/TopSpan";
import RegisterForm from "./components/register/RegisterForm";

// *Design Imports*
import "./register.css";

const RegisterIndex = () => {
  return (
    <main className="regGridContainer">
      <div className="leftSide">
        <TopSpan />
        <RegisterForm />
      </div>
      <div className="rightSide"></div>
    </main>
  );
};

export default RegisterIndex;
