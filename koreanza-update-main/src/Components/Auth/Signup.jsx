import React from "react";
import AuthLayout from "./AuthLayout";

const SignupPage = ({ onSwitch }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    onSwitch();
  };

  return (
    <AuthLayout>

      <form className="signup-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label className="form-label">Full name</label>
          <input type="text" className="form-input" />
        </div>

        <div className="form-group">
          <label className="form-label">Email</label>
          <input type="email" className="form-input" />
        </div>

        <div className="form-group">
          <label className="form-label">Password</label>
          <input type="password" className="form-input" />
        </div>

        <button type="submit" className="auth-btn btn-outline" style={{ marginTop: '10px' }}>
          Sign up
        </button>

        <p style={{ textAlign: 'center', fontSize: '0.8rem', color: '#555', margin: '5px 0' }}>or create with</p>

        <div className="social-login">
          <button type="button" className="social-btn">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/c/c1/Google_%22G%22_logo.svg"
              alt="Google"
              width="20"
            />
            Continue with google
          </button>

          <button type="button" className="social-btn">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg"
              alt="Apple"
              width="20"
            />
            Continue with apple
          </button>
        </div>

        <p className="signup-prompt">
          Already have an account?
          <span className="signup-link" onClick={onSwitch}>
            Login
          </span>
        </p>
      </form>
    </AuthLayout>
  );
};

export default SignupPage;
