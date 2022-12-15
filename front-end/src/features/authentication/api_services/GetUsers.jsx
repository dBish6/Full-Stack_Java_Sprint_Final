import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const GetUsers = () => {
  const [users, setUsers] = useState([]);
  const [loadingUsers, toggleUsersLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        toggleUsersLoading(true);
        const res = await axios({
          method: "GET",
          url: "http://localhost:8080/api/users",
        });
        console.log(res.data);
        toggleUsersLoading(false);

        if (!loadingUsers) {
          setUsers(res.data);
        }
      } catch (error) {
        console.error(error);
        navigate("/error500");
      }
    };
    fetchUsers();
  }, []);
  // console.log(users);

  return [users, loadingUsers];
};

export default GetUsers;
