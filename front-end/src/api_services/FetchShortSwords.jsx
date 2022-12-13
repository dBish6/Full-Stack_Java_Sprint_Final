import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const FetchShortSwords = () => {
  const [shortSwords, setShortSwords] = useState([]);
  const [loadingShortSwords, toggleShortSwordsLoading] = useState(false);
  const navigate = useNavigate();

  // Gets all swords with type Short Swords.
  useEffect(() => {
    const fetchProduct = async () => {
      try {
        toggleShortSwordsLoading(true);
        const res = await axios({
          method: "GET",
          url: "http://localhost:8080/api/sword/type/Short Sword",
        });
        console.log(res.data);
        toggleShortSwordsLoading(false);

        if (!loadingShortSwords) {
          setShortSwords(res.data);
        }
      } catch (error) {
        console.error(error);
        navigate("/error500");
      }
    };
    console.log(shortSwords);
    fetchProduct();
  }, []);

  return [shortSwords, loadingShortSwords];
};

export default FetchShortSwords;
