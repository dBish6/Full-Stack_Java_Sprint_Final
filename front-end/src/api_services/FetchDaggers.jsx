import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const FetchDaggers = () => {
  const [daggers, setDaggers] = useState([]);
  const [loadingDaggers, toggleDaggersLoading] = useState(false);
  const navigate = useNavigate();

  // Gets all swords with type Dagger.
  useEffect(() => {
    const fetchProduct = async () => {
      try {
        toggleDaggersLoading(true);
        const res = await axios({
          method: "GET",
          url: "http://localhost:8080/api/sword/type/Dagger",
        });
        console.log(res.data);
        toggleDaggersLoading(false);

        if (!loadingDaggers) {
          setDaggers(res.data);
        }
      } catch (error) {
        console.error(error);
        navigate("/error500");
      }
    };
    console.log(daggers);
    fetchProduct();
  }, []);

  return [daggers, loadingDaggers];
};

export default FetchDaggers;
