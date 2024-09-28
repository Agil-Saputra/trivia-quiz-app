import React from "react";
import { SignUp } from "@clerk/nextjs";

const SignUpPage = () => {
  return (
    <div className="grid place-items-center mt-30">
      <div className="text-left">
        <h1 className="text-3xl font-bold">Sign Up</h1>
        <p className="mb-4">Please Sign up to continue to Agil Quiz App</p>
        <SignUp />
      </div>
    </div>
  );
};

export default SignUpPage;
