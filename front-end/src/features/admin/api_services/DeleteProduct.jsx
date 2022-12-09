import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export const DeleteProduct = () => {
  const [product, setProduct] = useState([]);
  const [loadingProduct, toggleProductLoading] = useState(false);
  const navigate = useNavigate();

  // Removes a sword from the database.
  useEffect(() => {
    const fetchProduct = async () => {
      try {
        toggleProductLoading(true);
        const res = await axios({
          method: "GET",
          url: "http://localhost:8080/api/swords",
        });
        console.log(res.data);
        toggleProductLoading(false);

        if (!loadingProduct) {
          setProduct(res.data);
        }
      } catch (error) {
        console.error(error);
        navigate("/error500");
      }
    };
    console.log(product);
    fetchProduct();
  }, []);

  return [product, loadingProduct];
};

export default DeleteProduct;
