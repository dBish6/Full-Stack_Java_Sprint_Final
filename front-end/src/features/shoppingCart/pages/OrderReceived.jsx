import { Link } from "react-router-dom";

// *Design Imports*
import ArrowBack from "@mui/icons-material/ArrowBackRounded";

const OrderReceived = () => {
  return (
    <div>
      <h2>Thanks you for your order!</h2>
      <p>
        You're order with arrive in about <span>NEVER</span>!
      </p>
      <Link to="/home">
        <ArrowBack />
        <p>Continue Shopping</p>
      </Link>
    </div>
  );
};

export default OrderReceived;
