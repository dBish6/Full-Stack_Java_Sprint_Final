import { Link } from "react-router-dom";

// *Design Imports*
import ArrowBack from "@mui/icons-material/ArrowBackRounded";
import "../shoppingCart.css";

const OrderReceived = () => {
  return (
    <main className="orderContainer">
      <div>
        <h2>Thank you for your order!</h2>
        <p className="arriveTxt">
          You're order with arrive in about... <span>NEVER!</span>
        </p>
        <Link to="/home">
          <ArrowBack />
          <p>Go to Home</p>
        </Link>
      </div>
    </main>
  );
};

export default OrderReceived;
