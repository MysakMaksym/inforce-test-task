import { createAsyncThunk } from "@reduxjs/toolkit";
import * as fromApi from "../api/products.js";

export const fetchProducts = createAsyncThunk(
  "products/fetchProducts",
  async () => {
    const products = await fromApi.fetchProducts();
    return products;
  }
);
