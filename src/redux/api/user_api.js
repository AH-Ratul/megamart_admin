import { createApi } from "@reduxjs/toolkit/query/react";
import axios from "axios";

const axiosSecure = axios.create({
  baseURL: `${import.meta.env.VITE_baseurl}api/v1/`,
  withCredentials: true,
});

const baseQuery = async ({ url, method, body }) => {
  try {
    const result = await axiosSecure({
      url,
      method,
      data: body,
    });
    return { data: result.data };
  } catch (error) {
    const { response } = error;
    if (response) {
      return {
        error: {
          status: response?.status,
          data: response.data,
          message: response.statusText || "An error occured",
        },
      };
    } else {
      return {
        error: {
          status: null,
          data: null,
          message: error.message || "An unexpected error occured",
        },
      };
    }
  }
};

export const userApi = createApi({
  reducerPath: "userApi",
  baseQuery: baseQuery,
  tagTypes: ["auth"],
  endpoints: (builder) => ({
    createUser: builder.mutation({
      query: (user) => ({
        url: "users/signup",
        method: "POST",
        body: user,
      }),
    }),
    login: builder.mutation({
      query: (userCredentials) => ({
        url: "users/login",
        method: "POST",
        body: userCredentials,
      }),
    }),
    logOut: builder.mutation({
      query: () => ({
        url: "users/logout",
        method: "POST",
      }),
    }),
    getMe: builder.query({
      query: () => ({
        url: "users/getMe",
        method: "GET",
      }),
    }),
  }),
});

export const {
  useCreateUserMutation,
  useLoginMutation,
  useLogOutMutation,
  useGetMeQuery,
} = userApi;
