import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  initialState: [],
  name: "cartSlice",
  reducers: {
    addtocart: (state, action) => {
      const findproduct = state.find(
        (product) => product.id === action.payload.id
      );
      if (findproduct) {
        findproduct.quantity += 1;
      } else {
        const productclone = { ...action.payload, quantity: 1 };
        state.push(productclone);
      }
    },
    removefromcart: (state, action) => {
      return state.filter((product) => product.id !== action.payload.id);
    },
    clearcart: (state, action) => {
      return [];
    },

    updateQuantity: (state, action) => {
      const { id, quantity } = action.payload; // Extract id and new quantity
      const product = state.find((item) => item.id === id);
      if (product) {
        product.quantity = quantity; // Update the quantity
      }
    },
  },
});

export const { addtocart, removefromcart, clearcart, updateQuantity } =
  cartSlice.actions;
export default cartSlice.reducer;
