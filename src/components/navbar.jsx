import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { ShoppingCart } from "phosphor-react";
import "./navbar.css";
import { auth } from "../authComponents/firebase";

export const Navbar = (props) => {
  const navigate = useNavigate();
  const handleLogout = async () => {
    try {
      await auth.signOut();
      navigate("/");
    } catch (error) {
      console.error("Error logging out:", error);
    }
  };

  return (
    <div className="navbar">
      <div className="shopTitle">My Shop</div>
      <div className="user-name">Welcome, {props.name}</div>
      <div className="links">
        <Link to="/shop"> Shop </Link>
        <Link to="/contact"> Contact </Link>
        <Link to="/cart">
          <ShoppingCart size={32} />
        </Link>
        <button className="fix-logout" onClick={handleLogout}>
          Logout
        </button>
      </div>
    </div>
  );
};
