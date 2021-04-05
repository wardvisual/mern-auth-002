import React from "react";
import { Link } from "react-router-dom";

import "../index.css";

const ForgotPasswordScreen = () => {
  return (
    <div class="form-screen">
      <form className="form">
        <div>
          <label htmlFor="email">Email: </label>
          <input type="email" placeholder="Email..." id="email" />
        </div>

        <div className="form__button">
          <button type="submit">SEND INSTRUCTIONS</button>
          <p>
            Return <Link to="/">Home</Link>
          </p>
        </div>
      </form>
    </div>
  );
};

export default ForgotPasswordScreen;
