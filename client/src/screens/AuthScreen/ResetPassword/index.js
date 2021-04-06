import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "react-hook-form";

import "../index.css";
import { authResetPassword } from "../../../actions/auth";

const ResetPasswordScreen = ({ match }) => {
  const userResetPassword = useSelector((state) => state.userResetPassword);
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const password = useRef({});
  password.current = watch("password", "");

  const onSubmitHandler = (data) => {
    const { password } = data;

    dispatch(authResetPassword(password, match.params.resetToken));
  };

  const { loading, error, success } = userResetPassword;

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
          <label htmlFor="password">Password: </label>
          <input
            type="password"
            placeholder="Password..."
            id="password"
            name="password"
            {...register("password", {
              required: "Password is required",
              minLength: {
                value: 6,
                message: "Password must have at least 6 characters",
              },
            })}
          />
          {errors.password && (
            <p className="error">{errors.password.message}</p>
          )}
        </div>
        <div>
          <label htmlFor="confirmPassword">Confirm Password: </label>
          <input
            type="password"
            id="confirmPassword"
            name="confirmPassword"
            placeholder="Confirm Password..."
            {...register("confirmPassword", {
              required: "Password is required",
              validate: (value) =>
                value === password.current || "The passwords do not match",
            })}
          />
          {errors.confirmPassword && (
            <p className="error">{errors.confirmPassword.message}</p>
          )}
        </div>

        <div className="form__button">
          <button type="submit">RESET</button>
          <p className="error">{showActions()}</p>
          {success && (
            <p>
              Return <Link to="/auth/login">Login</Link>
            </p>
          )}
        </div>
      </form>
    </div>
  );
};

export default ResetPasswordScreen;
