import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

// *API Services Imports*
// import GetUsers from "./GetUsers";

// *Custom Hooks Imports*
// import useAuth from "../hooks/context/UseAuth";

// Adds a new user to the database.
const PostUsers = () => {
  // const [users, loadingUsers] = GetUsers();
  const [userNotFoundErr, setUserNotFoundErr] = useState(false);
  // const { login } = useAuth();
  const navigate = useNavigate();

  const postRegister = async (username, email, password, phone) => {
    // e.preventDefault();
    try {
      const res = await axios({
        method: "POST",
        url: "http://localhost:8080/api/user",
        data: {
          username: username,
          email: email,
          password: password,
          phone: phone,
        },
      });
      res && navigate("/login");
      console.log(res);
    } catch (error) {
      console.error(error);
      navigate("/error500");
    }
  };

  const postLogin = async (username, password) => {
    // e.preventDefault();
    try {
      const res = await axios({
        method: "POST",
        url: "http://localhost:8080/api/user/login",
        data: {
          username: username,
          password: password,
        },
        validateStatus: (status) => {
          return status === 200 || status === 404; // Resolve if the status code is 404; let 404 and 200 responses.
        },
      });
      setUserNotFoundErr(false);
      if (res.status === 404) {
        setUserNotFoundErr(true);
      } else if (res.status === 200) {
        // login().then(() => {
        //   navigate("/home");
        // });
        navigate("/home");
      }
      console.log(res);
    } catch (error) {
      console.error(error);
      navigate("/error500");
    }
  };

  return { postRegister, postLogin, userNotFoundErr };
};

export default PostUsers;
