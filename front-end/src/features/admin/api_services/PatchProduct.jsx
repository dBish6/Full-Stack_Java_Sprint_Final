import { useNavigate } from "react-router-dom";
import axios from "axios";

// Edits a new sword from the database.
const PatchProduct = () => {
  const navigate = useNavigate();

  const PATCHname = async (name, sword_id) => {
    try {
      const res = await axios({
        method: "PATCH",
        url: `http://localhost:8080/api/sword/${sword_id}`,
        data: {
          name: name,
        },
      });
      res && navigate("/admin/successfulPatch");
      console.log(res);
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
      res && navigate("/admin/successfulPatch");
      console.log(res);
    } catch (error) {
      console.error(error);
      navigate("/error500");
    }
  };

  const PATCHlength = async (length, sword_id) => {
    try {
      const res = await axios({
        method: "PATCH",
        url: `http://localhost:8080/api/sword/${sword_id}`,
        data: {
          length: length,
        },
      });
      res && navigate("/admin/successfulPatch");
      console.log(res);
    } catch (error) {
      console.error(error);
      navigate("/error500");
    }
  };

  const PATCHmass = async (mass, sword_id) => {
    try {
      const res = await axios({
        method: "PATCH",
        url: `http://localhost:8080/api/sword/${sword_id}`,
        data: {
          mass: mass,
        },
      });
      res && navigate("/admin/successfulPatch");
      console.log(res);
    } catch (error) {
      console.error(error);
      navigate("/error500");
    }
  };

  const PATCHprice = async (price, sword_id) => {
    try {
      const res = await axios({
        method: "PATCH",
        url: `http://localhost:8080/api/sword/${sword_id}`,
        data: {
          price: price,
        },
      });
      res && navigate("/admin/successfulPatch");
      console.log(res);
    } catch (error) {
      console.error(error);
      navigate("/error500");
    }
  };

  const PATCHdescription = async (description, sword_id) => {
    try {
      const res = await axios({
        method: "PATCH",
        url: `http://localhost:8080/api/sword/${sword_id}`,
        data: {
          description: description,
        },
      });
      res && navigate("/admin/successfulPatch");
      console.log(res);
    } catch (error) {
      console.error(error);
      navigate("/error500");
    }
  };

  const PATCHimageUrl = async (imageUrl, sword_id) => {
    try {
      const res = await axios({
        method: "PATCH",
        url: `http://localhost:8080/api/sword/${sword_id}`,
        data: {
          image_url: imageUrl,
        },
      });
      res && navigate("/admin/successfulPatch");
      console.log(res);
    } catch (error) {
      console.error(error);
      navigate("/error500");
    }
  };

  return {
    PATCHname,
    PATCHtype,
    PATCHlength,
    PATCHmass,
    PATCHprice,
    PATCHdescription,
    PATCHimageUrl,
  };
};

export default PatchProduct;
