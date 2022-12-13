import { useNavigate } from "react-router-dom";
import axios from "axios";

// Removes a sword from the database.
const DeleteProduct = () => {
  const navigate = useNavigate();

  const DELETE = async (sword_id) => {
    try {
      const res = await axios({
        method: "DELETE",
        url: `http://localhost:8080/api/sword/${sword_id}`,
      });
      console.log(res);
    } catch (error) {
      console.error(error);
      navigate("/error500");
    }
  };
  return DELETE;
};

export default DeleteProduct;
