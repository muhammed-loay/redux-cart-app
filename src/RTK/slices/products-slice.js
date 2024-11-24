import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
export const fetchproductds = createAsyncThunk(
  "productSlice/fetchProducts",
  async () => {
    const res = await fetch("https://fakestoreapi.com/products");
    const data = await res.json();

    return data;
  }
);

export const productSlice = createSlice({
  name: "productSlice",
  initialState: [],
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchproductds.fulfilled, (state, action) => {
      return action.payload;
    });
  },
});

export const {} = productSlice.actions;

export default productSlice.reducer;
