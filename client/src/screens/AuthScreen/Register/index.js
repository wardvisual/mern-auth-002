import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import "../index.css";

const RegisterScreen = () => {
  return (
    <div class="form-screen">
      <form className="form">
        <div className="column">
          <span>
            <label htmlFor="firstName">First Name: </label>
            <input
              type="text"
              placeholder="First Name..."
              id="firstName"
              name="firstName"
              required
            />
          </span>
          <span>
            <label htmlFor="lastName">Last Name: </label>
            <input
              type="text"
              placeholder="Last Name..."
              id="lastName"
              name="lastName"
              required
            />
          </span>
        </div>
        <div>
          <label htmlFor="email">Email: </label>
          <input type="email" placeholder="Email..." id="email" />
        </div>
        <div>
          <label htmlFor="password">Password: </label>
          <input type="password" placeholder="Password..." id="password" />
        </div>
        <div>
          <label htmlFor="confirmPassword">Confirm Password: </label>
          <input
            type="password"
            id="confirmPassword"
            name="confirmPassword"
            required
            placeholder="Confirm Password..."
          />
        </div>
        <div className="form__button">
          <button type="submit">REGISTER</button>
          <p>
            Already have an account? <Link to="/auth/login">Login</Link>
          </p>{" "}
          <hr />
          <p>
            Return <Link to="/">Home</Link>
          </p>
        </div>
      </form>
    </div>
  );
};

export default RegisterScreen;
