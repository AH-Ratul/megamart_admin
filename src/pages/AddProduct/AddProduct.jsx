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
      <div className="w-full border bg-white rounded-sm p-8  h-dvh">
        <h1 className="text-3xl font-bold text-prime">Add Product</h1>
        {/* Input Fields */}
        <form action="" className="mt-5">
          <div className="flex justify-between items-center gap-12">
            <input
              type="text"
              id="productId"
              name="productId"
              placeholder="Product ID"
              className="border focus:border-prime w-full bg-accent ps-2 py-2 outline-none rounded mt-1"
            />
            <input
              type="text"
              id="productName"
              name="productName"
              placeholder="Product Name"
              className="border focus:border-prime w-full bg-accent ps-2 py-2 outline-none rounded mt-1"
            />
          </div>
          {/* ** */}
          <div className="flex justify-between items-center gap-12 mt-5">
            <input
              type="text"
              id="brand"
              name="brand"
              placeholder="Brand"
              className="border focus:border-prime w-full bg-accent ps-2 py-2 outline-none rounded mt-1"
            />
            <input
              type="text"
              id="category"
              name="category"
              placeholder="Category"
              className="border focus:border-prime w-full bg-accent ps-2 py-2 outline-none rounded mt-1"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddProduct;
