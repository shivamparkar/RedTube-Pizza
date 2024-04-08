import React, { useState } from "react";
import './Login.css'

function Login() {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    console.log("Username:", userName);
    console.log("Password:", password);
  };

  const submitButton = document.getElementById('submitButton');

submitButton.addEventListener('mouseover', function() {
  this.textContent = 'Pizza Time 🍕';
});

submitButton.addEventListener('mouseout', function() {
  this.textContent = 'Login';
});

  return (
    <div className="login-wrapper">
      <div className="login-background"></div>
      <div className="login-box"> 
        <form onSubmit={handleSubmit}>
          <div className="input-group"> 
            <label>UserName</label>
            <input 
              type="text" 
              value={userName} 
              onChange={(e) => setUserName(e.target.value)} 
            />
          </div>
          <div className="input-group"> 
            <label>Password</label>
            <input 
              type="password" 
              value={password} 
              onChange={(e) => setPassword(e.target.value)} 
            />
          </div>
          <button id="submitButton" type="submit">
            Login
          </button>
        </form>
      </div>
    </div>
  );
}
export default Login;
