import React, { useState } from "react";
import Register from "../components/Register";
import Login from "../components/Login";

const SignupLogin = () => {
  const [isRegister, setIsRegister] = useState(true);

  const toggleForm = () => {
    setIsRegister(!isRegister);
  };

  return (
    <div className="container mx-auto py-10">
      <h1 className="text-3xl font-bold text-center">Signup or Login</h1>
      <div className="flex justify-center mt-8">
        {isRegister ? <Register /> : <Login />}
      </div>
      <div className="flex justify-center mt-4">
        <button
          className="text-blue-500 underline"
          onClick={toggleForm}
        >
          {isRegister ? "Already have an account? Login" : "Don't have an account? Register"}
        </button>
      </div>
    </div>
  );
};

export default SignupLogin;
