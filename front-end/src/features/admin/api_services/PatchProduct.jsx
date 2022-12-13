import { useNavigate } from "react-router-dom";
import axios from "axios";

// FIXME:
// Edits a new sword from the database.
const PatchProduct = () => {
  const navigate = useNavigate();
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

  const PATCHname = async (name, sword_id) => {
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
      navigate("/error500");
    }
  };

  const PATCHtype = async (type, sword_id) => {
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
      navigate("/error500");
    }
  };

  return { PATCHname, PATCHtype };
};

export default PatchProduct;
