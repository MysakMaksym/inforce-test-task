import { configureStore } from "@reduxjs/toolkit";
import productsReducer from "./reducers/products.js";

export default configureStore({
  reducer: {
    products: productsReducer,
  },
});
