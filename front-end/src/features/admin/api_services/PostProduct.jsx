import { useNavigate } from "react-router-dom";
import axios from "axios";

// Adds a new sword to the database.
const PostProduct = async (e) => {
  const navigate = useNavigate();
  e.preventDefault();
  try {
    toggleProductLoading(true);
    const res = await axios({
      method: "POST",
      url: "http://localhost:8080/api/sword",
      data: {
        // name: registerUsername,
        // type: registerEmail,
        // length: registerPassword,
        // mass: registerPhoneNumber,
        // price: registerFavouriteGenre,
        // description: ,
        // image:
      },
    });
    console.log(res.data);
  } catch (error) {
    console.error(error);
    navigate("/error500");
  }
};

export default PostProduct;
