import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useForm } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";

// *Custom Hooks Imports*
import usePhoneFormat from "../../hooks/usePhoneFormat";

// *API Services Imports*
import PostUsers from "../../api_services/PostUsers";

// *Design Imports*

const RegisterForm = () => {
  const [registerUsername, setRegisterUsername] = useState("");
  const [registerEmail, setRegisterEmail] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");
  const [registerPhoneNumber, setRegisterPhoneNumber] = useState("");

  const [inputValue, handleInput] = usePhoneFormat();
  const [errorMsg, setErrorMsg] = useState("");

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
  const navigate = useNavigate();
  // FIXME: Not a function????????????
  // const postRegister = PostUsers();

  const handlePhoneErrorMsg = (e) => {
    // FIXME: Has to include a letter not equal.
    console.log(e.target.value);
    /^[A-Za-z]+$/.test(e.target.value)
      ? setErrorMsg("Must only include numbers.")
      : setErrorMsg(null);
  };

  const postRegister = async (e) => {
    // FIXME:
    // e.preventDefault();
    try {
      const res = await axios({
        method: "POST",
        url: "http://localhost:8080/api/user",
        data: {
          username: registerUsername,
          email: registerEmail,
          password: registerPassword,
          phone: registerPhoneNumber,
        },
      });
      console.log(res.data);
    } catch (error) {
      console.error(error);
      navigate("/error500");
    }
  };

  return (
    <>
      {/* <PostUsers
        username={registerUsername}
        email={registerEmail}
        password={registerPassword}
        phone={registerPhoneNumber}
      /> */}
      <form
        className="registerForm"
        onSubmit={handleSubmit(() => postRegister())}
      >
        <div className="formMain">
          <h1>Sign Up</h1>

          <input
            {...register("username", {
              required: "Username is required.",
              maxLength: 20,
              onChange: (e) => setRegisterUsername(e.target.value),
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
              onChange: (e) => setRegisterEmail(e.target.value),
            })}
            name="email"
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
              onChange: (e) => setRegisterPassword(e.target.value),
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
              // pattern: {
              //   value: /^[0-9]+$/,
              // },
              // maxLength: 10,
              onChange: (e) => {
                setRegisterPhoneNumber(e.target.value);
                handleInput(e);
                handlePhoneErrorMsg(e);
              },
            })}
            name="phone"
            // type="number"
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
    </>
  );
};

export default RegisterForm;
