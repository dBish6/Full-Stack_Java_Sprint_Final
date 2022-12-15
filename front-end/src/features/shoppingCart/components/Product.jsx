import React from "react";
import { useDispatch } from "react-redux";

// *Design Imports*
import noImage from "../../../assets/images/no-image.webp";
import { AddCircle, RemoveCircle, Delete } from "@mui/icons-material";

// *Redux Action Imports*
import {
  DECREASE_QUANTITY,
  INCREASE_QUANTITY,
  REMOVE_FROM_CART,
} from "../redux/cartSlice";

const Product = (props) => {
  const dispatch = useDispatch();

  return (
    <div className="productRow">
      {props.cartItems.length === 0 ? (
        <h2>Currently no Items in Cart.</h2>
      ) : (
        props.cartItems.map((sword) => {
          console.log(sword);
          return (
            <div className="cartItemContainer" key={sword.sword_id}>
              <p>{props.quantity}</p>
              <div className="cartImageContainer">
                {!sword.image_url.includes("https") ? (
                  <img src={noImage} alt="no-image.webp" />
                ) : (
                  <img src={sword.image_url} alt="image_url" />
                )}
              </div>
              <h4>{sword.name}</h4>
              {/* <p>
                <span>Length:</span> {sword.length}in
              </p>
              <p>
                <span>Mass:</span> {sword.mass} lbs
              </p> */}
              <div className="quantityContainer">
                <RemoveCircle
                  onClick={() => dispatch(DECREASE_QUANTITY(sword))}
                />
                {sword.quantity}
                <AddCircle onClick={() => dispatch(INCREASE_QUANTITY(sword))} />
              </div>
              <p>${sword.price}</p>
              <div className="deleteContainer">
                <Delete onClick={() => dispatch(REMOVE_FROM_CART(sword))} />
                <small>Delete</small>
              </div>
            </div>
          );
        })
      )}
    </div>
  );
};

export default Product;
