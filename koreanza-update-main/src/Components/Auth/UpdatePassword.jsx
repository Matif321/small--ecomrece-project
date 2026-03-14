import React from "react";
import AuthLayout from "./AuthLayout";

const UpdatePassword = ({ onSwitch, onSuccess }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    if (onSuccess) onSuccess();
  };

  return (
    <AuthLayout
      globalTitle="Update Password"
      introTitle="New credentials"
    >
      <form onSubmit={handleSubmit} style={{ marginTop: '20px', width: '100%' }}>
        <div className="form-group">
          <label className="form-label">Enter new passowrd:</label>
          <input type="password" className="form-input" />
        </div>

        <div className="form-group">
          <label className="form-label">Confirm password</label>
          <input type="password" className="form-input" />
        </div>

        <div style={{ marginTop: '30px' }}>
          <button className="auth-btn btn-outline" style={{ width: '100%' }}>Update</button>
        </div>
      </form>
    </AuthLayout>
  );
};

export default UpdatePassword;
