import React from "react";
import { useForm } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";

// *Custom Hooks Imports*

// *API Services Imports*
import PostRegister from "../../api_services/PostRegister";

// *Design Imports*

const RegisterForm = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({
    defaultValues: {
      username: "",
      email: "",
      password: "",
      phone: "",
    },
  });
  const onSubmit = (data) => console.log(data);

  return (
    <form className="registerForm" onSubmit={handleSubmit(onSubmit)}>
      <div className="formMain">
        <h1>Sign Up</h1>

        <input
          {...register("username", {
            required: "Username is required.",
            maxLength: 20,
          })}
          name="username"
          autoComplete="off"
        />
        <label htmlFor="username">Username</label>
        <ErrorMessage errors={errors} name="username" />

        <input
          {...register("email", {
            required: "Email is required.",
          })}
          name="email"
          autoComplete="off"
        />
        <label htmlFor="email">Email</label>
        <ErrorMessage
          errors={errors}
          name="email"
          render={({ message }) => <small>{message}</small>}
        />

        <input
          {...register("password", {
            required: "Password is required.",
          })}
          name="password"
          type="password"
        />
        <label htmlFor="password">Password</label>

        <input
          {...register("phone", {
            required: false,
          })}
          name="phone"
          autoComplete="off"
        />
        <label htmlFor="phone">Phone</label>
        <p>
          By clicking on “Sign Up” below, you agree to the Raven's terms and
          privacy policy.
        </p>
        <button type="submit">Sign Up</button>
        <small>Must be 18 or older to sign up.</small>
      </div>
    </form>
  );
};

export default RegisterForm;
