import React, { useRef } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "react-hook-form";

import "../index.css";
import { authRegister } from "../../../actions/auth";
import { EmailField, NormalTextField } from "../../../components";

const RegisterScreen = () => {
  const userRegister = useSelector((state) => state.userRegister);
  const dispatch = useDispatch();

  const { loading, error } = userRegister;

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const password = useRef({});
  password.current = watch("password", "");

  const onSubmitHandler = (data) => {
    const { firstName, lastName, email, password } = data;

    dispatch(authRegister(firstName, lastName, email, password));
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
        <div className="column">
          <div>
            <label htmlFor="firstName">First Name: </label>
            <NormalTextField
              type="text"
              placeholder="First Name..."
              id="firstName"
              name="firstName"
              register={register}
              maxLength={20}
              minLength={3}
              required
            />
            {errors.firstName && (
              <p className="error">{errors.firstName.message}</p>
            )}
          </div>

          <div>
            <label htmlFor="lastName">Last Name: </label>
            <NormalTextField
              type="text"
              placeholder="Last Name..."
              id="lastName"
              name="lastName"
              register={register}
              required
              maxLength={20}
              minLength={3}
            />
            {errors.lastName && (
              <p className="error">{errors.lastName.message}</p>
            )}
          </div>
        </div>
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
          <button type="submit">REGISTER</button>{" "}
          <p className="error">{showActions()}</p>
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
