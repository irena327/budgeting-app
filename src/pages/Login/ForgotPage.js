import React from "react";

import ForgotForm from "../../components/Login/ForgotForm";
import History from "../../navigation/History";
import { Button } from "antd";

import "./Login.css";

function ForgotPage() {
  return (
      <div>
         Forgot Page
      </div>
   //  <div className="LoginPageLayout">
   //    <div className="Logo">
   //      <img src={Logo} alt="Path Software Logo"></img>
   //    </div>
   //    <h3 className={"LabelBold"}>Forgot your password?</h3>
   //    <h3 className={"LabelBold"}>Please enter the following information.</h3>
   //    <ForgotForm />
   //    <h3 className={"LabelReg"}>
   //      Don't have an account?&nbsp;
   //      <p
   //        className={"Link"}
   //        onClick={() => {
   //          History.push("/signup");
   //        }}
   //      >
   //        Sign up!
   //      </p>
   //    </h3>
   //    <h3 className={"LabelReg"}>
   //      Already have an account?&nbsp;
   //      <p
   //        className={"Link"}
   //        onClick={() => {
   //          History.push("/");
   //        }}
   //      >
   //        Log in.
   //      </p>
   //    </h3>
   //  </div>
  );
}

export default ForgotPage;
