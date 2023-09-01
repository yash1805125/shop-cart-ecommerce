import React, { useState } from "react";
import "./style.css";
import { signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "./firebase";
import { useNavigate } from "react-router-dom";

export const Login = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    if (!email || !password) return alert("Fill all fields");

    signInWithEmailAndPassword(auth, email, password)
      .then(async (res) => {
        console.log(res);

        navigate("/");
      })
      .catch((err) => console.log(err));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="fix-div">
      <div className="auth-form-container">
        <h2 style={{ color: "black" }}>Login</h2>
        <form className="form" onSubmit={handleSubmit}>
          <label htmlFor="email">Email</label>

          <input
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            type="email"
            placeholder="someone@gmail.com"
            id="email"
            name="email"
            className="fix-input"
          />

          <label htmlFor="password">Password</label>

          <input
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            type="password"
            placeholder="*****"
            id="password"
            name="password"
            className="fix-input"
          />

          <button
            style={{ color: "brown" }}
            className="l1"
            type="submit"
            onClick={handleLogin}
          >
            Log In
          </button>
        </form>

        <button className="link" onClick={() => navigate("/signup")}>
          Don't Have an account? SignUp here
        </button>
      </div>
    </div>
  );
};
