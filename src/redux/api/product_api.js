import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const productsApi = createApi({
  reducerPath: "productsApi",
  baseQuery: fetchBaseQuery({
    baseUrl: `${import.meta.env.VITE_baseurl}/api/v1`,
    credentials: true,
  }),
  tagTypes: ["products"],
  endpoints: (builder) => ({
    addProducts: builder.mutation({
      query: (products) => ({
        url: "/products/addProduct",
        method: "POST",
        body: products,
      }),
    }),
    getProducts: builder.query({
      query: "/products/getProducts",
      method: "GET",
    }),
  }),
});
