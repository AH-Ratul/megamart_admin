import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const productsApi = createApi({
  reducerPath: "productsApi",
  baseQuery: fetchBaseQuery({
    baseUrl: `${import.meta.env.VITE_baseurl}api/v1`,
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
      query: (data) => ({
        url: "/products/getProducts",
        method: "GET",
        body: data,
      }),
    }),
  }),
});

export const { useAddProductsMutation, useGetProductsQuery } = productsApi;
