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

  return (
    <div className="login-wrapper">
      <div className="login-background"></div>
      <div className="login-box"> 
        <form onSubmit={handleSubmit}>
          <div className="input-group"> 
            <label>Username</label>
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
          <button type="submit">
            Login
          </button>
        </form>
      </div>
    </div>
  );
}
export default Login;
