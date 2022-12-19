import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useDispatch } from "react-redux";
import bcrypt from "bcryptjs";

// *Redux Action Imports*
import { USER_SESSION } from "../redux/userSlice";

// *API Services Imports*
import GetUsers from "./GetUsers";

// This file holds all the POST operations for the user; register, login, logout.
const PostUsers = () => {
  const [users, loadingUsers] = GetUsers();
  const [userConflictErr, setUserConflictErr] = useState(false);
  const [userNotFoundErr, setUserNotFoundErr] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const postRegister = async (username, email, password, phone) => {
    try {
      const res = await axios({
        method: "POST",
        url: "http://localhost:8080/api/register",
        data: {
          username: username,
          email: email,
          password: password,
          phone: phone,
        },
        validateStatus: (status) => {
          return status === 200 || status === 409; // Resolve if the status code is 409; let 404 responses as well as 200.
        },
      });
      setUserConflictErr(false);
      if (res.status === 409) {
        setUserConflictErr(true);
      } else if (res.status === 200) {
        setUserConflictErr(false);
        navigate("/login");
      }
      console.log(res);
    } catch (error) {
      console.error(error);
      navigate("/error500");
    }
  };

  const postLogin = async (username, password) => {
    try {
      const response = await axios({
        method: "POST",
        url: "http://localhost:8080/api/login",
        data: {
          username: username,
          password: password,
        },
      });
      setUserNotFoundErr(false);
      users.forEach((user) => {
        // Compares the hash password from the back-end, which is where the password is hashed.
        bcrypt.compare(password, user.password, (err, res) => {
          if (err) console.error(err);
          if (res) {
            // Compares usernames.
            if (user.username === username) {
              setUserNotFoundErr(false);
              dispatch(USER_SESSION(true));
              response && navigate("/home");
            } else {
              setUserNotFoundErr(true);
            }
          } else {
            setUserNotFoundErr(true);
          }
        });
      });
      console.log(response);
    } catch (error) {
      console.error(error);
      navigate("/error500");
    }
  };

  const postLogout = async (e) => {
    e.preventDefault();
    try {
      const res = await axios({
        method: "POST",
        url: "http://localhost:8080/api/logout",
      });
      if (res) {
        dispatch(USER_SESSION(false));
        alert("Session timed out.");
        navigate("/home");
      }
      console.log(res);
    } catch (error) {
      console.error(error);
      navigate("/error500");
    }
  };

  return {
    postRegister,
    userConflictErr,
    postLogin,
    userNotFoundErr,
    postLogout,
  };
};

export default PostUsers;
