import React from "react";
import Startfile from "./startfile";
import { Link } from "react-router-dom";

const Authpage = ({ name }) => {
  return (
    <div>
      {name ? (
        <Startfile />
      ) : (
        <div>
          <h2>
            <Link to="/login">Login</Link>
          </h2>
          <br />
          <h2>
            <Link to="/signup">Signup</Link>
          </h2>
        </div>
      )}
    </div>
  );
};

export default Authpage;
