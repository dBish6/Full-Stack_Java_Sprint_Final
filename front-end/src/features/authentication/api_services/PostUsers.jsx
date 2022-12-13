import { useNavigate } from "react-router-dom";
import axios from "axios";

// Adds a new user to the database.
const PostUsers = async () => {
  const navigate = useNavigate();

  const postRegister = async (username, email, password, phone) => {
    // FIXME:
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
      console.log(res.data);
    } catch (error) {
      console.error(error);
      navigate("/error500");
    }
  };
  return postRegister;
};

export default PostUsers;
