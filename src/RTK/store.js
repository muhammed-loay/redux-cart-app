import { configureStore } from "@reduxjs/toolkit";
// import Products from "../components/products";
import productSlice from "./slices/products-slice";
import cartSlice from "./slices/cart-slice";

export const store = configureStore({
  reducer: {
    cart: cartSlice,
    products: productSlice,
  },
});
