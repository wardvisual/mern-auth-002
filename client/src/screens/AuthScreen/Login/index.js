import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "react-hook-form";

import { authLogin } from "../../../actions/auth";
import "../index.css";
import { EmailField } from "../../../components";

const LoginScreen = () => {
  const userLogin = useSelector((state) => state.userLogin);

  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmitHandler = (data) => {
    const { email, password } = data;

    dispatch(authLogin(email, password));
  };

  const { loading, error, success } = userLogin;

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
        <div className="form__button">
          <button type="submit">LOGIN</button>
          <p className="error">{showActions()}</p>
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
