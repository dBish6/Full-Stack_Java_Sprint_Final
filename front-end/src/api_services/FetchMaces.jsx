import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const FetchMaces = () => {
  const [maces, setMaces] = useState([]);
  const [loadingMaces, toggleMacesLoading] = useState(false);
  const navigate = useNavigate();

  // Gets all swords with type Maces.
  useEffect(() => {
    const fetchProduct = async () => {
      try {
        toggleMacesLoading(true);
        const res = await axios({
          method: "GET",
          url: "http://localhost:8080/api/sword/type/Mace",
        });
        console.log(res.data);
        toggleMacesLoading(false);

        if (!loadingMaces) {
          setMaces(res.data);
        }
      } catch (error) {
        console.error(error);
        navigate("/error500");
      }
    };
    fetchProduct();
  }, []);
  // console.log(maces);

  return [maces, loadingMaces];
};

export default FetchMaces;
