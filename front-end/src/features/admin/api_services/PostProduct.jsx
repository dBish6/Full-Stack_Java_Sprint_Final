import { useNavigate } from "react-router-dom";
import axios from "axios";

// Adds a new sword to the database.
const PostProduct = () => {
  const navigate = useNavigate();

  const POST = async (
    name,
    type,
    length,
    mass,
    price,
    description,
    imageUrl
  ) => {
    try {
      const res = await axios({
        method: "POST",
        url: "http://localhost:8080/api/sword",
        data: {
          name: name,
          type: type,
          length: length,
          mass: mass,
          price: price,
          description: description,
          image_url: imageUrl,
        },
      });
      res && navigate("/admin/successfulPost");
      console.log(res);
    } catch (error) {
      console.error(error);
      navigate("/error500");
    }
  };
  return POST;
};

export default PostProduct;
