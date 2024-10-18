import { createSlice } from "@reduxjs/toolkit";
import { userApi } from "../api/user_api";

const initialState = {
  user: "",
  isAuthenticated: false,
  role: "",
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUser: (state, action) => {
      const { user } = action.payload || {};
      if (user) {
        state.user = user;
        state.isAuthenticated = true;
        state.role = user.role;
      }
    },
    logout: (state) => {
      state.user = "";
      state.isAuthenticated = false;
      state.role = "";
    },
  },
  extraReducers: (builder) => {
    builder
      .addMatcher(userApi.endpoints.getMe.matchFulfilled, (state, action) => {
        const { user } = action.payload;
        state.user = user;
        state.isAuthenticated = true;
        state.role = user.role;
      })
      .addMatcher(userApi.endpoints.getMe.matchRejected, (state, aciton) => {
        state.user = "";
        state.isAuthenticated = false;
        state.role = "";
      });
  },
});

export const { setUser, logout } = authSlice.actions;

export default authSlice.reducer;
