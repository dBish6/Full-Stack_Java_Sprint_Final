// Allows us to select a state from the store.
export const selectProducts = (store) => store.cart.products;
export const selectSubTotal = (store) => store.cart.subTotal;
export const selectTaxRate = (store) => store.cart.taxRate;
export const selectTotalPrice = (store) => store.cart.totalPrice;
