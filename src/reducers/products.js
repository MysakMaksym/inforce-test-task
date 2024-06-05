import { createSlice } from "@reduxjs/toolkit";
import { fetchProducts } from "../actions/products";

export const productsSlice = createSlice({
  name: "products",
  initialState: {
    value: [],
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchProducts.fulfilled, (state, action) => {
      state.value = action.payload;
    });
  },
});

export default productsSlice.reducer;
