import React from "react";
import { useNavigate } from "react-router-dom";
import "./sample.css";

const Sample = () => {
    const navigate = useNavigate();
  return (
    <div className="button-container">

      <button className="btn"onClick={() => navigate("/app-openning")}> Set Appointment </button>

      <button className="btn">Visit Web</button>

      <button className="btn">Plan Your Wedding</button>
      
    </div>
  );
};

export default Sample;

