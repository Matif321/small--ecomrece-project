import React from "react";
import AuthLayout from "./AuthLayout";

const ForgotPassword = ({ onSwitch, onNext }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real app, you'd send an API request here
    if (onNext) {
      onNext();
    } else {
      console.error("onNext prop is missing");
    }
  };

  return (
    <AuthLayout
      introTitle="Enter your email"
    >
      <form onSubmit={handleSubmit} style={{ width: '100%' }}>

        <div className="form-group" style={{ marginTop: '30px' }}>
          <label className="form-label">Email:</label>
          <input type="email" className="form-input" placeholder="" required />
        </div>

        <div style={{ display: 'flex', justifyContent: 'center', marginTop: '30px' }}>
          <button className="auth-btn btn-solid" style={{ width: '120px' }}>Send</button>
        </div>

      </form>
    </AuthLayout>
  );
};

export default ForgotPassword;
