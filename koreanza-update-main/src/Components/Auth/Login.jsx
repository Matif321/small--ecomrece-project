import React, { useState } from "react";
import AuthLayout from "./AuthLayout";

const Login = ({ onSwitch, onForgot }) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <AuthLayout
      globalTitle="Login"
      introTitle="Welcome back"
      introSubtitle="Please sign in to your account"
    >

      <h2 className="auth-card-title">Login</h2>

      <form onSubmit={(e) => e.preventDefault()}>
        <div className="form-group">
          <label className="form-label">Email:</label>
          <input type="email" className="form-input" />
        </div>

        <div className="form-group">
          <label className="form-label">Password:</label>
          <div className="password-wrapper">
            <input
              type={showPassword ? "text" : "password"}
              className="form-input"
            />
            <span
              className="eye-icon"
              onClick={() => setShowPassword(!showPassword)}
            >
              👁️
            </span>
          </div>
        </div>

        <div className="form-footer">
          <label>
            <input
              type="checkbox"
              onChange={() => setShowPassword(!showPassword)}
              style={{ marginRight: '5px' }}
            />
            Show Password
          </label>

          <button className="forgot-link" onClick={onForgot}>
            Forgot password?
          </button>
        </div>

        <button className="auth-btn btn-outline">Login</button>

        <p className="signup-prompt">
          Don’t have an account?
          <span className="signup-link" onClick={onSwitch}>
            Sign up
          </span>
        </p>
      </form>
    </AuthLayout>
  );
};

export default Login;
