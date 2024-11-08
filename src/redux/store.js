import { configureStore } from "@reduxjs/toolkit";
import { userApi } from "./api/user_api";
import authReducers from "./slice/authSlice";
import productReducers from "./slice/productSlice";
import { productsApi } from "./api/product_api";

export const store = configureStore({
  reducer: {
    auth: authReducers,
    products: productReducers,
    [userApi.reducerPath]: userApi.reducer,
    [productsApi.reducerPath]: productsApi.reducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(userApi.middleware, productsApi.middleware),
});
