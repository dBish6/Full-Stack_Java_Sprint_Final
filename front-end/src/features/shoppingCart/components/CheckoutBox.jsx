import { Link } from "react-router-dom";

// *API Services Imports*
import PostOrder from "../api_services/PostOrder";

// *Design Imports*
import ArrowBack from "@mui/icons-material/ArrowBackRounded";

const CheckoutBox = (props) => {
  const POST = PostOrder();

  return (
    <div className="checkoutBox">
      <h3>
        <span>Subtotal:</span> {props.subtotal}
      </h3>
      <h3>
        <span>Tax Rate:</span> 8.0%
      </h3>
      <h3>
        <span>Total:</span> {props.totalPrice}
      </h3>
      <button
        onClick={() =>
          POST(props.cartItems, props.subtotal, props.taxRate, props.totalPrice)
        }
      >
        Checkout
      </button>
      <Link to="/home">
        <ArrowBack />
        <p>Continue Shopping</p>
      </Link>
    </div>
  );
};

export default CheckoutBox;
