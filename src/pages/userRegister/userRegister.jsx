import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import "./userRegister.css";

const UserRegister = () => {
  const [formData, setFormData] = useState({
    name: "",
    dateOfBirth: "",
    email: "",
    gender: [],
    contactNumber: "",
    otp: "",
  });

  const genders = ["male", "female", "other"];

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    if (type === "checkbox") {
      setFormData((prev) => ({
        ...prev,
        [name]: checked
          ? [...prev[name], value]
          : prev[name].filter((item) => item !== value),
      }));
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

    const navigate = useNavigate();
  

  return (
    <div className="register-container">
      <h2>User Registration</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={formData.name}
          onChange={handleChange}
        />
        <input
          type="date"
          name="dateOfBirth"
          placeholder="Date of Birth"
          value={formData.dateOfBirth}
          onChange={handleChange}
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
        />

<div className="gender-section">
  <label>Gender</label>
  {genders.map((gender) => (
    <label key={gender}>
      <input
        type="radio"
        name="gender"
        value={gender}
        checked={formData.gender === gender} // Ensures only one selection
        onChange={handleChange}
      />
      {gender}
    </label>
  ))}
</div>


        <div className="otp-section">
          <input
            type="text"
            name="contactNumber"
            placeholder="Contact Number"
            value={formData.contactNumber}
            onChange={handleChange}
          />
          <button type="button" className="send-otp">Send OTP</button>
          <input
            type="text"
            name="otp"
            placeholder="Type OTP here"
            value={formData.otp}
            onChange={handleChange}
          />
        </div>

        <div className="profile-photo">
          <label>Add Profile Photo</label>
          <input type="file" />
        </div>

        <div className="buttons">
          <button type="button" className="cancel" onClick={() => navigate("/app-openning")} >Cancel</button>
          <button type="submit" className="submit">Submit</button>
        </div>
      </form>
    </div>
  );
};

export default UserRegister;
