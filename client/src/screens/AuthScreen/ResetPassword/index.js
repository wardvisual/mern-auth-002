import React from "react";
import { Link } from "react-router-dom";

import "../index.css";

const ResetPasswordScreen = () => {
  return (
    <div class="form-screen">
      <form className="form">
        <div>
          <label htmlFor="password">Password: </label>
          <input type="password" placeholder="Password..." id="password" />
        </div>
        <div>
          <label htmlFor="confirmPassword">Confirm Password: </label>
          <input
            type="password"
            placeholder="Confirm Password..."
            id="confirmPassword"
          />
        </div>

        <div className="form__button">
          <button type="submit">RESET</button>
          <p>
            Return <Link to="/auth/login">Login</Link>
          </p>
        </div>
      </form>
    </div>
  );
};

export default ResetPasswordScreen;
