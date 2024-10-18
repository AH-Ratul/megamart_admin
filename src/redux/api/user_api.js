import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const userApi = createApi({
  reducerPath: "userApi",
  baseQuery: fetchBaseQuery({
    baseUrl: `${import.meta.env.VITE_baseurl}api/v1/`,
  }),
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
