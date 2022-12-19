import { useNavigate } from "react-router-dom";
import axios from "axios";

import { useDispatch } from "react-redux";
import { CLEAR_CART } from "../redux/cartSlice";

// Adds a new sword to the database.
const PostOrder = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const POST = async (cartItems, subtotal, taxRate, grandTotal) => {
    try {
      const res = await axios({
        method: "POST",
        url: "http://localhost:8080/api/order",
        data: {
          cartItems: cartItems,
          order_subtotal: subtotal,
          order_total: grandTotal,
          tax_rate: taxRate,
        },
      });
      if (res) {
        dispatch(CLEAR_CART);
        navigate("/cart/order");
      }
      console.log(res);
    } catch (error) {
      console.error(error);
      navigate("/error500");
    }
  };
  return POST;
};

export default PostOrder;
