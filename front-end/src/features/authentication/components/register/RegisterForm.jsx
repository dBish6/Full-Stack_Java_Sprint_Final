import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";

// *Custom Hooks Imports*
import usePhoneFormat from "../../hooks/usePhoneFormat";

// *API Services Imports*
import PostUsers from "../../api_services/PostUsers";

const RegisterForm = () => {
  const [inputValue, handleInput] = usePhoneFormat();
  const [errorMsg, setErrorMsg] = useState("");

  const {
    register,
    formState: { errors },
    handleSubmit,
    watch,
  } = useForm({
    defaultValues: {
      username: "",
      email: "",
      password: "",
      phone: "",
    },
  });
  const { postRegister } = PostUsers();
  console.log(watch());

  // Error message which shows in real time.
  const handlePhoneErrorMsg = (e) => {
    // FIXME: Has to include a letter not equal.
    console.log(e.target.value);
    /^[A-Za-z]+$/.test(e.target.value)
      ? setErrorMsg("Must only include numbers.")
      : setErrorMsg(null);
  };

  return (
    <form
      className="registerForm"
      onSubmit={handleSubmit(() =>
        postRegister(
          watch("username"),
          watch("email"),
          watch("password"),
          watch("phone")
        )
      )}
    >
      <div className="formMain">
        <h1>Sign Up</h1>

        <input
          {...register("username", {
            required: "Username is required.",
            maxLength: {
              value: 30,
              message: "Username can be no more then 30 characters.",
            },
          })}
          name="username"
          autoComplete="off"
          placeholder=" "
        />
        <label htmlFor="username" id="usernameLabel">
          Username<span className="required">*</span>
        </label>
        <ErrorMessage
          errors={errors}
          name="username"
          render={({ message }) => (
            <small className="inputError">{message}</small>
          )}
        />

        <input
          {...register("email", {
            required: "Email is required.",
            pattern: { value: /^\S+@\S+$/i, message: "Invalid email address." },
          })}
          name="email"
          type="email"
          autoComplete="off"
          placeholder=" "
        />
        <label htmlFor="email" id="emailLabel">
          Email<span className="required">*</span>
        </label>
        <ErrorMessage
          errors={errors}
          name="email"
          render={({ message }) => (
            <small className="inputError">{message}</small>
          )}
        />

        <input
          {...register("password", {
            required: "Password is required.",
          })}
          name="password"
          type="password"
          placeholder=" "
        />
        <label htmlFor="password" id="passwordLabel">
          Password<span className="required">*</span>
        </label>
        <ErrorMessage
          errors={errors}
          name="password"
          render={({ message }) => (
            <small className="inputError">{message}</small>
          )}
        />

        <input
          {...register("phone", {
            required: false,
            // Doesn't show in real time.
            // pattern: {
            //   value: /^[0-9]+$/,
            //   message: "Must only include numbers.",
            // },
            minLength: {
              value: 15,
              message: "Must be at least 10 digits long.",
            },
            onChange: (e) => {
              console.log(e.target.value.length);
              handleInput(e);
              handlePhoneErrorMsg(e);
            },
          })}
          name="phone"
          type="tel"
          autoComplete="off"
          placeholder=" "
          value={inputValue}
        />
        <label htmlFor="phone" id="phoneLabel">
          Phone
        </label>
        <ErrorMessage
          errors={errors}
          name="phone"
          render={({ message }) => (
            <small className="inputError">{message}</small>
          )}
        />
        {errorMsg ? (
          <small className="inputError">{errorMsg}</small>
        ) : undefined}

        <p>
          By clicking on “Sign Up” below, you agree to the Raven's terms and
          privacy policy.
        </p>
        <button type="submit">Sign Up</button>
        <small className="ageText">Must be 18 or older to sign up.</small>
      </div>
    </form>
  );
};

export default RegisterForm;
