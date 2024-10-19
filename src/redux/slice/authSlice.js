import { createSlice } from "@reduxjs/toolkit";
import { userApi } from "../api/user_api";

const initialState = {
  user: "",
  isAuthenticated: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
      state.isAuthenticated = true;
    },
    logout: (state) => {
      state.user = "";
      state.isAuthenticated = false;
    },
  },
  extraReducers: (builder) => {
    builder
      .addMatcher(userApi.endpoints.getMe.matchFulfilled, (state, action) => {
        state.user = action.payload;
        state.isAuthenticated = true;
      })
      .addMatcher(userApi.endpoints.getMe.matchRejected, (state, aciton) => {
        state.user = "";
        state.isAuthenticated = false;
      });
  },
});

export const { setUser, logout } = authSlice.actions;

export default authSlice.reducer;
