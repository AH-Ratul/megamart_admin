import { configureStore } from "@reduxjs/toolkit";
import { userApi } from "./api/user_api";
import authReducers from "./slice/authSlice";

export const store = configureStore({
  reducer: {
    auth: authReducers,
    [userApi.reducerPath]: userApi.reducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(userApi.middleware),
});
