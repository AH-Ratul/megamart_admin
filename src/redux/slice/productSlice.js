import { createSlice } from "@reduxjs/toolkit";
import { productsApi } from "../api/product_api";

const initialState = {
  products: "",
  loading: false,
};

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addMatcher(
      productsApi.endpoints.addProducts.matchPending,
      (state) => {
        state.loading = true;
      }
    );
    builder.addMatcher(
      productsApi.endpoints.addProducts.matchFulfilled,
      (state, action) => {
        state.products = action.payload;
        state.loading = false;
      }
    );
    builder.addMatcher(
      productsApi.endpoints.addProducts.matchRejected,
      (state) => {
        state.loading = false;
      }
    );
    builder.addMatcher(
      productsApi.endpoints.getProducts.matchPending,
      (state) => {
        state.loading = true;
      }
    );
    builder.addMatcher(
      productsApi.endpoints.getProducts.matchFulfilled,
      (state, action) => {
        state.products = action.payload;
        state.loading = false;
      }
    );
  },
});

export default productsSlice.reducer;
