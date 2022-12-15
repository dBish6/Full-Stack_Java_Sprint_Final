import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

const initialState = {
  products: [],
  //   totalItems: 0,
  subTotal: 0,
  taxRate: 0.08,
  totalPrice: 0,
};
const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    ADD_TO_CART: (state, action) => {
      // Payload is whatever coming in.
      const productIndex = state.products.findIndex(
        (sword) => sword.sword_id === action.payload.sword_id
      );
      // Finds if the product is already in the cart.
      if (productIndex >= 0) {
        state.products[productIndex].quantity++;
        toast.info(
          `${state.products[productIndex].name}'s quantity increased`,
          {
            position: "bottom-left",
            theme: "dark",
          }
        );
      } else {
        const newProduct = { ...action.payload, quantity: 1 };
        state.products.push(newProduct);
        toast.success(`${action.payload.name} added to cart!`, {
          position: "bottom-left",
          theme: "dark",
        });
      }
    },
    REMOVE_FROM_CART: (state, action) => {
      state.products = state.products.filter(
        (sword) => sword.sword_id !== action.payload.sword_id
      );
      toast.error(`${action.payload.name} was removed`, {
        position: "bottom-left",
        theme: "dark",
      });
    },
    INCREASE_QUANTITY: (state, action) => {
      const productIndex = state.products.findIndex(
        (sword) => sword.sword_id === action.payload.sword_id
      );

      state.products[productIndex].quantity = action.payload.quantity++;
      toast.info(`${state.products[productIndex].name}'s quantity increased`, {
        position: "bottom-left",
        theme: "dark",
      });
    },
    DECREASE_QUANTITY: (state, action) => {
      const productIndex = state.products.findIndex(
        (sword) => sword.sword_id === action.payload.sword_id
      );

      if (state.products[productIndex].quantity > 1) {
        console.log(state.products[productIndex].quantity);
        state.products[productIndex].quantity = action.payload.quantity--;
        toast.info(
          `${state.products[productIndex].name}'s quantity increased`,
          {
            position: "bottom-left",
            theme: "dark",
          }
        );
      } else {
        state.products.splice(productIndex, 1);
        toast.error(`${action.payload.name} was removed`, {
          position: "bottom-left",
          theme: "dark",
        });
      }
    },
  },
});

// Action creators are generated for each case reducer function.
export const {
  ADD_TO_CART,
  REMOVE_FROM_CART,
  INCREASE_QUANTITY,
  DECREASE_QUANTITY,
} = cartSlice.actions;
// Exports the slice's reducer.
export default cartSlice.reducer;
