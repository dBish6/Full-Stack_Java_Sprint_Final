import { useNavigate } from "react-router-dom";
import axios from "axios";

// Edits a new sword from the database.
const PatchProduct = () => {
  // const patchName = async (
  //   name,
  //   type,
  //   length,
  //   mass,
  //   price,
  //   description,
  //   image_url,
  //   sword_id
  // ) => {
  //   //   const navigate = useNavigate();
  //   try {
  //     const res = await axios({
  //       method: "PATCH",
  //       url: `http://localhost:8080/api/sword/${sword_id}`,
  //       data: {
  //         name: name,
  //         type: type,
  //         length: length,
  //         mass: mass,
  //         price: price,
  //         description: description,
  //         image_url: image_url,
  //       },
  //     });
  //     console.log(res.data);
  //   } catch (error) {
  //     console.error(error);
  //     // navigate("/error500");
  //   }
  // };

  const patchName = async (name, sword_id) => {
    //   const navigate = useNavigate();
    try {
      const res = await axios({
        method: "PATCH",
        url: `http://localhost:8080/api/sword/${sword_id}`,
        data: {
          name: name,
        },
      });
      console.log(res.data);
    } catch (error) {
      console.error(error);
      // navigate("/error500");
    }
  };

  const patchType = async (type, sword_id) => {
    //   const navigate = useNavigate();
    try {
      const res = await axios({
        method: "PATCH",
        url: `http://localhost:8080/api/sword/${sword_id}`,
        data: {
          type: type,
        },
      });
      console.log(res.data);
    } catch (error) {
      console.error(error);
      // navigate("/error500");
    }
  };

  return { patchName, patchType };
};

export default PatchProduct;
