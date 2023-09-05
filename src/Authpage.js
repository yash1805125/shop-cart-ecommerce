import React, { useEffect } from "react";
import Startfile from "./startfile";
import { Link } from "react-router-dom";

const Authpage = ({ name }) => {
  console.log(name);
  return (
    <div>
      {name ? (
        <Startfile />
      ) : (
        <div>
          <div className="lp-navbar">
            <div className="lp-1">My Shop</div>

            <div className="pseudo">
              <div className="pseudo-border"></div>
              <div className="pseudo-border"></div>
              <div className="pseudo-border"></div>
            </div>
          </div>

          <div className="fix-start">
            <h1 className="welcome-title">` Welcome to MyShop App `</h1>
            <h3 className="login-signup-title">
              Please Login/Signup to account
            </h3>
            <div className="fix-login-signup">
              <h2 className="link-auth">
                <Link to="/login" className="l">
                  Login
                </Link>
              </h2>

              <h2 className="link-auth">
                <Link to="/signup" className="l">
                  Signup
                </Link>
              </h2>
            </div>
            <br />
            <br />
            <br />
          </div>
        </div>
      )}
    </div>
  );
};

export default Authpage;
