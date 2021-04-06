import React from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "react-hook-form";

import "../index.css";
import { authForgotPassword } from "../../../actions/auth";
import { EmailField } from "../../../components";

const ForgotPasswordScreen = () => {
  const userForgotPassword = useSelector((state) => state.userForgotPassword);
  const dispatch = useDispatch();

  const { loading, error, success } = userForgotPassword;

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmitHandler = (data) => {
    const { email } = data;

    dispatch(authForgotPassword(email));
  };

  const showActions = () => {
    let msg;

    if (error) {
      msg = error;
    }

    if (loading) {
      msg = "loading...";
    }

    return <p>{msg}</p>;
  };
  return (
    <div className="form-screen">
      <form className="form" onSubmit={handleSubmit(onSubmitHandler)}>
        <div>
          <label htmlFor="email">Email: </label>
          <EmailField
            type="email"
            placeholder="Email..."
            id="email"
            name="email"
            register={register}
            required
            maxLength={50}
          />
          {errors.email && <p className="error">{errors.email.message}</p>}
        </div>

        <div className="form__button">
          <button type="submit">SEND INSTRUCTIONS</button>
          <p className="error">{showActions()}</p>
          <p>
            Return <Link to="/">Home</Link>
          </p>
        </div>
      </form>
    </div>
  );
};

export default ForgotPasswordScreen;
