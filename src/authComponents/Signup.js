import React, { useState } from "react";
import "./style.css";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "./firebase";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignup = () => {
    if (!name || !email || !password) return alert("Fill all fields");

    createUserWithEmailAndPassword(auth, email, password)
      .then(async (res) => {
        console.log(res);
        const user = res.user;
        await updateProfile(user, {
          displayName: name,
        });
        navigate("/");
      })
      .catch((err) => {
        alert(err);
        console.log(err);
      });
  };

  const handleSubmit = (e) => e.preventDefault();

  return (
    <div className="fix-div">
      <div className="auth-form-container">
        <h2 style={{ color: "black" }}>Signup</h2>
        <form className="form" onSubmit={handleSubmit}>
          <label htmlFor="email">Name</label>
          <input
            type="text"
            placeholder="type name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="fix-input"
          />

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
            onClick={handleSignup}
          >
            Signup
          </button>
        </form>

        <button className="link" onClick={() => navigate("/login")}>
          Already have an account? Login here
        </button>
      </div>
    </div>
  );
};

export { Signup };
