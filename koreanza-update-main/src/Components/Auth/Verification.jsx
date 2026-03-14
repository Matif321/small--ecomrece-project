import React from "react";
import AuthLayout from "./AuthLayout";
import img from "../../assets/Images/face/cover-removebg-preview.png";

const Verification = ({ onSwitch, onNext }) => {
  const handleVerify = () => {
    if (onNext) onNext();
  };

  return (
    <AuthLayout
      image={img}
      globalTitle="forgot passwordd"
      introTitle="Check your email"
    >
      <div style={{ textAlign: 'center', padding: '20px 0' }}>
        <p style={{ color: '#D97B4A', fontSize: '0.9rem', marginBottom: '20px' }}>we have just send you a verification code.</p>

        <div className="verification-container">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <input key={i} type="text" className="verify-box" maxLength="1" />
          ))}
        </div>

        <div style={{ marginTop: '30px', display: 'flex', justifyContent: 'center' }}>
          <button className="auth-btn btn-solid" style={{ width: '150px' }} onClick={handleVerify}>Verify</button>
        </div>

        <p style={{ fontSize: '0.8rem', color: '#555', marginTop: '20px' }}>
          i don't get a code <span style={{ color: '#D97B4A', cursor: 'pointer' }}>Resent</span>
        </p>
      </div>
    </AuthLayout>
  );
};

export default Verification;
