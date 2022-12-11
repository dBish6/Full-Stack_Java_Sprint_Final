import { useNavigate } from "react-router-dom";
import axios from "axios";

// Adds a new user to the database.
const PostRegister = async (e, props) => {
  const navigate = useNavigate();
  e.preventDefault();
  try {
    const res = await axios({
      method: "POST",
      url: "http://localhost:8080/api/sword",
      data: {
        // username: registerUsername,
        // email: registerEmail,
        // password: registerPassword,
        // phone: registerPhoneNumber
      },
    });
    console.log(res.data);
  } catch (error) {
    console.error(error);
    navigate("/error500");
  }
};

export default PostRegister;
