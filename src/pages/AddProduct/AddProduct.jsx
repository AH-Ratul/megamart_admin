import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import React from "react";
import { useForm } from "react-hook-form";

const AddProduct = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const handleAddProduct = () => {};
  return (
    <div className="flex justify-center items-center ml-5 mr-5 mt-[10px]">
      <div className="w-full border bg-white rounded-sm p-8  h-dv">
        <h1 className="text-3xl font-bold text-prime">Add Product</h1>
        {/* Input Fields */}
        <form action="" className="mt-5">
          <div className="flex justify-between items-center gap-12">
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Category" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Electrical & Applience">
                  Electrical & Applience
                </SelectItem>
                <SelectItem value="Mobile & Accessories">
                  Mobile & Accessories
                </SelectItem>
                <SelectItem value="Home Decor & Life Style">
                  Home Decor & Life Style
                </SelectItem>
                <SelectItem value="Women's Fashion">Women's Fashion</SelectItem>
                <SelectItem value="Men's Fashion">Men's Fashion</SelectItem>
                <SelectItem value="Computer & Accessories">
                  Computer & Accessories
                </SelectItem>
                <SelectItem value="TV & Home Applience">
                  TV & Home Applience
                </SelectItem>
                <SelectItem value="Gift's Items">Gift's Items</SelectItem>
                <SelectItem value="Grocery">Grocery</SelectItem>
              </SelectContent>
            </Select>
            {/* SUB CATEGORY */}
            <Input
              type="text"
              id="subCategory"
              name="subCategory"
              placeholder="Sub Category"
            />
          </div>
          {/* PRODUCT NAME & CODE */}
          <div className="flex justify-between items-center gap-12 mt-5">
            <Input
              type="text"
              id="productName"
              name="productName"
              placeholder="Product Name"
            />
            <Input
              type="text"
              id="productCode"
              name="productCode"
              placeholder="Product Code"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddProduct;
