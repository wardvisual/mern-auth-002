import React from "react";
import { Link } from "react-router-dom";

import "../index.css";

const LoginScreen = () => {
  return (
    <div class="form-screen">
      <form className="form">
        <div>
          <label htmlFor="email">Email: </label>
          <input type="email" placeholder="Email..." id="email" />
        </div>
        <div>
          <label htmlFor="password">Password: </label>
          <input type="password" placeholder="Password..." id="password" />
        </div>
        <div className="form__button">
          <button type="submit">LOGIN</button>
          <p>
            Don't have an account? <Link to="/auth/register">Register</Link>
          </p>
          <p>
            Forgot your <Link to="/auth/forgotpassword">password?</Link>
          </p>
          <hr />
          <p>
            Return <Link to="/">Home</Link>
          </p>
        </div>
      </form>
    </div>
  );
};

export default LoginScreen;
