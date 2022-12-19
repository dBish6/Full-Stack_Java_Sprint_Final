import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useDispatch } from "react-redux";

// *Redux Action Imports*
import { STORE_PRODUCTS_SEARCHED } from "../redux/globalSlice";

const SearchSword = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // Query a search by input and GETs the swords.
  const searchProduct = async (val) => {
    try {
      console.log(`http://localhost:8080/api/swords/search?name=${val}`);
      const res = await axios({
        method: "GET",
        url: `http://localhost:8080/api/swords/search?name=${val}`,
      });
      if (res) {
        navigate("/home/search");
        dispatch(STORE_PRODUCTS_SEARCHED(res.data));
      }
      console.log(res.data);
    } catch (error) {
      console.error(error);
      navigate("/error500");
    }
  };

  return searchProduct;
};

export default SearchSword;
