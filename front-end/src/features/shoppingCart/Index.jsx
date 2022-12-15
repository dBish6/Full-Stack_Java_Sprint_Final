import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

// *Custom Hooks Imports*

// *API Services Imports*

// *Component Imports*
import Product from "./components/Product";

// *Design Imports*
import "./shoppingCart.css";
import ArrowBack from "@mui/icons-material/ArrowBackRounded";

// *Selectors Imports*
import {
  selectProducts,
  selectSubTotal,
  selectTaxRate,
  selectTotalPrice,
} from "./redux/selectors";

const ShoppingCartFeature = () => {
  const products = useSelector(selectProducts);
  const navigate = useNavigate();

  return (
    <div className="cartGridContainer">
      <div className="goBack">
        <ArrowBack onClick={() => navigate("/home")} />
        <small>Home</small>
      </div>
      <Product cartItems={products} />
      <button>Clear Cart</button>
    </div>
  );
};

export default ShoppingCartFeature;
