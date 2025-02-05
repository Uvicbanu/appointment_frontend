import "./login.css";
import { useState } from "react";

const Login = () => {
  const [mobileNumber, setMobileNumber] = useState("");

  const handleLogin = () => {
    alert(`Logging in with ${mobileNumber}`);
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      <input
        type="text"
        placeholder="Mobile Number"
        value={mobileNumber}
        onChange={(e) => setMobileNumber(e.target.value)}
      />
      <button onClick={handleLogin}>Login</button>
      <p>or</p>
      <button>Register</button>
      <button className="owner-btn">Register as Owner</button>
      <a href="#">Need help?</a>
    </div>
  );
};

export default Login;
