import React from "react";
import { Link } from "react-router-dom";

import "./index.css";

const HomeScreen = () => {
  return (
    <div className="home-screen">
      <div className="home-screen__content">
        <h1>
          <span> MERN </span> AUTHENTICATION!
        </h1>
        <div className="home-screen__tags">
          <p>Tags</p>
          <div>
            <p>NODEMAILER</p>
            <p>SENDGRID</p>
            <p>JWT</p>
            <p>BCRYPTJS</p>
          </div>
        </div>
        <div className="form-group">
          <Link to="/auth/register">
            <button>SIGN UP</button>
          </Link>
          <Link to="/auth/login">
            <button> SIGN IN</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HomeScreen;
