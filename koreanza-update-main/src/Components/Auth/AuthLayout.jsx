import React from "react";
import "./AuthLayout.css";

const AuthLayout = ({
    globalTitle,
    introTitle,
    introSubtitle,
    children
}) => {
    return (
        <div className="auth-page-wrapper">
            {globalTitle && <h1 className="global-auth-title">{globalTitle}</h1>}

            <div className="auth-container">
                {/* Centered Content */}
                <div className="auth-content">
                    {(introTitle || introSubtitle) && (
                        <div className="auth-intro-text">
                            {introTitle && <h3 className="auth-intro-title">{introTitle}</h3>}
                            {introSubtitle && <p className="auth-intro-subtitle">{introSubtitle}</p>}
                        </div>
                    )}

                    <div className="auth-card">
                        {children}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AuthLayout;
