import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import allIcons from "@/data/all-icons";
import { useGetProductsQuery } from "@/redux/api/product_api";
import React from "react";
import { useSelector } from "react-redux";

const ManageProducts = () => {
  const { del, edit } = allIcons;

  const { data: productData, isLoading, error } = useGetProductsQuery();
  const { loading } = useSelector((state) => state.products);
  const products = productData?.data || [];

  if (isLoading && loading) {
    return <h1>Loading</h1>;
  }

  if (error) {
    return <p>Error loading products, please try again later...</p>;
  }

  return (
    <div className="flex justify-center items-center ml-5 mr-5 mt-[10px]">
      <div className="w-full border bg-white p-8 rounded-sm">
        <h1 className="text-2xl 2xl:text-3xl font-bold ">Manage Products</h1>

        <Table>
          <TableHeader className="2xl:text-base">
            <TableRow>
              <TableHead className="w-[130px]">Product Code</TableHead>
              <TableHead>Product Name</TableHead>
              <TableHead>Price</TableHead>
              <TableHead className="text-center">Quantity</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Action</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody className="2xl:text-base">
            {products?.length > 0 ? (
              products.map((product) => (
                <TableRow key={product._id}>
                  <TableCell className="font-bold">
                    {product.productCode}
                  </TableCell>
                  <TableCell>{product.productName}</TableCell>
                  <TableCell>{product.price}</TableCell>
                  <TableCell className="text-center">
                    {product.quantity}
                  </TableCell>
                  <TableCell>
                    <span
                      className={`${
                        product.availability === "In Stock"
                          ? "bg-lime-500"
                          : "bg-red-500"
                      } text-white p-1 rounded-sm text-xs`}
                    >
                      {product.availability}
                    </span>
                  </TableCell>
                  <TableCell className="flex items-center gap-2">
                    <span className="bg-sky-500 text-white p-1 rounded-sm">
                      {edit}
                    </span>
                    <button className="bg-red-600 text-white p-1 rounded-sm">
                      {del}
                    </button>
                  </TableCell>
                </TableRow>
              ))
            ) : (
              <p>No Products found</p>
            )}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default ManageProducts;
