import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import "./ownerRegister.css";

const OwnerRegister = () => {
        
    
  const [formData, setFormData] = useState({
    salonName: "",
    registrationNumber: "",
    district: "",
    city: "",
    hometown: "",
    address: "",
    salonType: [],
    services: [],
    contactNumber: "",
    otp: "",
  });

  const salonTypes = ["male", "female", "baby"];
  const services = [
    "Haircuts & Trims",
    "Hair Coloring",
    "Hair Styling",
    "Hair Treatments",
    "Hair Straightening/Perming",
    "Facials",
    "Waxing and Threading",
    "Makeup Services",
    "Eyebrow and Eyelash Treatments",
    "Manicures and Pedicures",
    "Nail Treatments",
    "Massages",
    "Body Treatments",
    "Tanning",
    "Bridal Packages",
    "Hair Donation Preparation",
    "Wig Styling and Maintenance",
  ];

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
      <h2>Salon Owner Registration</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="salonName"
          placeholder="Salon Name"
          value={formData.salonName}
          onChange={handleChange}
        />
        <input
          type="text"
          name="registrationNumber"
          placeholder="Registration Number"
          value={formData.registrationNumber}
          onChange={handleChange}
        />

        <div className="location-section">
          <label>Location</label>
          <select name="district" value={formData.district} onChange={handleChange}>
            <option value="">District</option>
            <option value="district1">District 1</option>
            <option value="district2">District 2</option>
          </select>
          <select name="city" value={formData.city} onChange={handleChange}>
            <option value="">City</option>
            <option value="city1">City 1</option>
            <option value="city2">City 2</option>
          </select>
          <select name="hometown" value={formData.hometown} onChange={handleChange}>
            <option value="">HomeTown</option>
            <option value="hometown1">HomeTown 1</option>
            <option value="hometown2">HomeTown 2</option>
          </select>
        </div>

        <input
          type="text"
          name="address"
          placeholder="Address"
          value={formData.address}
          onChange={handleChange}
        />

        <div className="salon-type-section">
          <label>Salon Type</label>
          {salonTypes.map((type) => (
            <label key={type}>
              <input
                type="checkbox"
                name="salonType"
                value={type}
                checked={formData.salonType.includes(type)}
                onChange={handleChange}
              />
              {type}
            </label>
          ))}
        </div>

        <div className="cover-photo">
          <label>Add Cover Photo</label>
          <input type="file" />
        </div>

        <div className="services-section">
          <label>Service</label>
          {services.map((service) => (
            <label key={service}>
              <input
                type="checkbox"
                name="services"
                value={service}
                checked={formData.services.includes(service)}
                onChange={handleChange}
              />
              {service}
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

        <div className="buttons">
          <button type="button" className="cancel" onClick={() => navigate("/app-openning")}>Cancel</button>
          <button type="submit" className="submit">Submit</button>
        </div>
      </form>
    </div>
  );
};

export default OwnerRegister;
