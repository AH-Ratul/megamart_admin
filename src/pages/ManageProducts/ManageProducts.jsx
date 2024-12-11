import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import allIcons from "@/data/all-icons";
import React from "react";

const ManageProducts = () => {
  const { del, edit } = allIcons;
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
            <TableRow>
              <TableCell className="font-bold">#SH33</TableCell>
              <TableCell>Hp i5 8gen Professional laptop</TableCell>
              <TableCell>90,000</TableCell>
              <TableCell className="text-center">9</TableCell>
              <TableCell>
                <span className="bg-lime-500 text-white p-1 rounded-sm text-xs">
                  In Stock
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
            <TableRow>
              <TableCell className="font-medium">#SH33</TableCell>
              <TableCell>Hp i5 8gen Professional laptop</TableCell>
              <TableCell>90,000</TableCell>
              <TableCell className="text-center">9</TableCell>
              <TableCell>
                <span className="bg-red-600 text-white p-1 rounded-sm text-xs">
                  Out of Stock
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
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default ManageProducts;
