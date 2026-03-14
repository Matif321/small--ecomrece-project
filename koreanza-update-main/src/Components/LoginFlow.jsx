import React, { useState } from "react";
import Login from "./Auth/Login";
import Signup from "./Auth/Signup";
import ForgotPassword from "./Auth/ForgotPassword";
import Verification from "./Auth/Verification";
import UpdatePassword from "./Auth/UpdatePassword";

const LoginFlow = () => {
  const [currentView, setCurrentView] = useState("login");

  return (
    <div>
      {currentView === "login" && (
        <Login
          onSwitch={() => setCurrentView("signup")}
          onForgot={() => setCurrentView("forgot")}
        />
      )}

      {currentView === "signup" && (
        <Signup onSwitch={() => setCurrentView("login")} />
      )}

      {currentView === "forgot" && (
        <ForgotPassword onNext={() => setCurrentView("verify")} />
      )}

      {currentView === "verify" && (
        <Verification onNext={() => setCurrentView("update")} />
      )}

      {currentView === "update" && (
        <UpdatePassword onSuccess={() => setCurrentView("login")} />
      )}
    </div>
  );
};

export default LoginFlow;
