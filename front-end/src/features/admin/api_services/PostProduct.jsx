import { useNavigate } from "react-router-dom";
import axios from "axios";

// Adds a new sword to the database.
const PostProduct = (props) => {
  const navigate = useNavigate();

  const POST = async (e) => {
    e.preventDefault();
    try {
      const res = await axios({
        method: "POST",
        url: "http://localhost:8080/api/sword",
        data: {
          name: props.name,
          type: props.type,
          length: props.length,
          mass: props.mass,
          price: props.price,
          description: props.description,
          image_url: props.imageUrl,
        },
      });
      console.log(res.data);
    } catch (error) {
      console.error(error);
      navigate("/error500");
    }
  };
  return POST;
};

export default PostProduct;
