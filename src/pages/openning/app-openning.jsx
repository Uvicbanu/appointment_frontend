import React from "react";
import { useNavigate } from "react-router-dom";

import "./app-openning.css";


const AppOpening = () => {
    const navigate = useNavigate();
  return (
    <div className="app-opening">
      <h2>Welcome to Saloon Appointments!</h2>

      <div className="advertisement">
        <p>Application Advertisements (Marketing Purpose)</p>
      </div>

      <div className="login-section">
        <input type="text" placeholder="Mobile Number" className="mobile-input" />
        <button className="login-btn">Login</button>
        <p>or</p>
        <button className="register-btn" onClick={() => navigate("/user-register")} >Register</button>
      </div>

      <hr className="divider" />

      <div className="owner-section">
        <button className="owner-register-btn" onClick={() => navigate("/owner-register")}>Register as Owner</button>
      </div>

      <p className="help-link">Need Help?</p>
    </div>
  );
};

export default AppOpening;
