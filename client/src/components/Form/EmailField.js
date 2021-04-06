import React from "react";

const EmailField = ({
  type,
  placeholder,
  register,
  required,
  id,
  name,
  maxLength,
  minLength,
}) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      id={id}
      name={name}
      {...register(name, {
        required: required && `${placeholder.replace("...", "")} is required.`,
        maxLength: {
          value: maxLength,
          message: `${placeholder.replace(
            "...",
            ""
          )} must be less than ${maxLength} characters.`,
        },
        minLength: {
          value: minLength,
          message: `${placeholder.replace(
            "...",
            ""
          )} must be greater than ${minLength} characters.`,
        },
        pattern: {
          value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
          message: "Invalid email address",
        },
      })}
    />
  );
};

export default EmailField;
