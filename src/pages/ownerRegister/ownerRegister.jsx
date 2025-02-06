import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./ownerRegister.css";

const OwnerRegister = () => {
  const [formData, setFormData] = useState({
    salonName: "",
    registrationNumber: "",
    district: "",
    city: "",
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

  const cityOptions = {
    "Ampara District": ["Akkaraipattu", "Ampara City", "Kalmunai", "Pottuvil", "Sainthamaruthu", "Sammanthurai", "Thirukkovil", "Uhana"],
    "Anuradhapura District": ["Anuradhapura City", "Eppawala", "Galenbindunuwewa", "Galnewa", "Habarana", "Kekirawa", "Medawachchiya", "Mihintale", "Mochchiyagama", "Tambuttegama", "Talawa"],
    "Badulla District": ["Badulla", "Bandarawela", "Diyatalawa", "Ella", "Haputale", "Mahiyanganaya", "Passara", "Welimada"],
    "Batticaloa District": ["Batticaloa", "Chenkalady", "Eravur", "Kalkudah", "Kattankudy", "Valaichchenai", "Vakarai"],
    "Colombo District": ["Angoda", "Athirugiriya", "Avissawella", "Battaramulla", "Boralesgamuwa", "Colombo 1", "Colombo 2", "Colombo 3", "Colombo 4", "Colombo 5", "Colombo 6", "Colombo 7", "Colombo 8", "Colombo 9", "Colombo 10", "Colombo 11", "Colombo 12", "Colombo 13", "Colombo 14", "Colombo 15", "Dehiwala", "Godagama", "Hanwella", "Homagama", "Kaduwela", "Kesbawa", "Kohuwala", "Kolonnawa", "Kotte", "Kottawa", "Maharagama", "Malabe", "Meegoda", "Moratuwa", "Mount Lavinia", "Nawala", "Nugegoda", "Padukka", "Pannipitiya", "Piliyandala", "Rajagiriya", "Rathmalana", "Thalawathugoda", "Wellampitiya"],
    "Galle District": ["Ahangama", "Ambalangoda", "Baddegama", "Balapitiya", "Batapola", "Bentota", "Elpitiya", "Galle City", "Hikkaduwa", "Karandeniya", "Karapitiya", "Nagoda", "Unawatuna"],
    "Gampaha District": ["Biyagama", "Dompe", "Gampaha", "Ja-Ela", "Kadawatha", "Kandana", "Katunayake", "Kelaniya", "Kiribathgoda", "Mahara", "Minuwangoda", "Mirigama", "Negombo", "Nittambuwa", "Ragama", "Veyangoda", "Wattala"],
    "Hambantota District": ["Ambalantota", "Angunukolapelessa", "Beliatta", "Hambantota", "Okewela", "Tangalle", "Tissamaharama", "Walasmulla", "Weeraketiya"],
    "Jaffna District": ["Chavakachcheri", "Jaffna", "Karainagar", "Kopay", "Maruthnkerny", "Nallur", "Point Pedro", "Tellippalai", "Uduvil"],
    "Kalutara District": ["Aluthgama", "Bandaragama", "Beruwala", "Bulathsinhala", "Dodangoda", "Horana", "Ingiriya", "Kalutara", "Matugama", "Millaniya", "Palindanuwara", "Panadura", "Walallavita"],
    "Kandy District": ["Akurana", "Ampitiya", "Digana", "Galagedara", "Gelioya", "Gampola", "Kadugannawa", "Kandy City", "Katugastota", "Kundasale", "Madawala Bazaar", "Menikhinna", "Nawalapitiya", "Peradeniya", "Pilimathalawa", "Wattegama"],
    "Kegalle District": ["Dehiowita", "Deraniyagala", "Galigamuwa", "Kegalle", "Mawanella", "Rambukkana", "Ruwanwella", "Warakapola", "Yatiyantota"],
    "Kilinochchi District": ["Kandavalai", "Kilinochchi", "Pallai", "Paranthan", "Poonakary"],
    "Kurunegala District": ["Alawwa", "Bingiriya", "Kuliyapitiya", "Kurunegala", "Mawathagama", "Narammala", "Panduwasnuwara", "Polgahawela", "Wariyapola"],
    "Mannar District": ["Adampan", "Madhu", "Mannar", "Murunkan", "Nanattan"],
    "Matale District": ["Dambulla", "Galewela", "Matale", "Naula", "Palapathwela", "Rattota", "Sigiriya", "Ukuwela", "Yatawatta"],
    "Matara District": ["Akuressa", "Dikwella", "Hakmana", "Kamburupitiya", "Kirinda", "Malimbada", "Matara", "Thihagoda", "Weligama"],
    "Monaragala District": ["Bibile", "Buttala", "Katharagama", "Monaragala", "Siyambalanduwa", "Thanamalvila", "Wellawaya"],
    "Mullaitivu District": ["Maritimepattu", "Mullaitivu", "Oddusuddan", "Puthukkudiyiruppu", "Thunukkai"],
    "Nuwara Eliya District": ["Agarapathana", "Ambagamuwa", "Ginigathena", "Hanguranketha", "Hatton", "Kotagala", "Lindula", "Maskeliya", "Nuwara Eliya", "Talawakelle"],
    "Polonnaruwa District": ["Dimbulagala", "Hingurakgoda", "Kaduruwela", "Lankapura", "Medirigiriya", "Polonnaruwa", "Welikanda"],
    "Puttalam District": ["Anamaduwa", "Arachchikattuwa", "Chilaw", "Dankotuwa", "Kalpitiya", "Nattandiya", "Puttalam", "Wennappuwa"],
    "Ratnapura District": ["Balangoda", "Eheliyagoda", "Embilipitiya", "Godakawela", "Kahawatta", "Kuruwita", "Pelmadulla", "Ratnapura"],
    "Trincomalee District": ["Gomarankadawala", "Kantale", "Kinniya", "Muttur", "Seruwila", "Thampalakamam", "Trincomalee"],
    "Vavuniya District": ["Cheddikulam", "Omanthai", "Poovarasankulam", "Vavuniya"]
  };

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
      setFormData((prev) => ({
        ...prev,
        [name]: value,
        ...(name === "district" && { city: "" }), // Reset city when district changes
      }));
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

        {/* Location Selection */}
        <div className="location-section">
          <label>Location</label>
          <select name="district" value={formData.district} onChange={handleChange}>
            <option value="">Select District</option>
            {Object.keys(cityOptions).map((district) => (
              <option key={district} value={district}>
                {district}
              </option>
            ))}
          </select>

          <select name="city" value={formData.city} onChange={handleChange} disabled={!formData.district}>
            <option value="">Select City</option>
            {formData.district &&
              cityOptions[formData.district].map((city, index) => (
                <option key={index} value={city}>
                  {city}
                </option>
              ))}
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