import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import React, { useRef } from "react";
import { Controller, useForm } from "react-hook-form";

const AddProduct = () => {
  const {
    register,
    handleSubmit,
    reset,
    watch,
    control,
    formState: { errors },
  } = useForm();
  const watchCategory = watch("category");

  const fileInputRef = useRef();

  const handleFileClick = () => {
    fileInputRef.current.click();
  };

  const handleAddProduct = () => {};
  return (
    <div className="flex justify-center items-center ml-5 mr-5 mt-[10px] mb-9">
      <div className="w-full border bg-white rounded-sm p-8  h-dv">
        <h1 className="text-3xl font-bold text-prime">Add Product</h1>
        {/* Input Fields */}
        <form action="" className="mt-5">
          <div className="flex justify-between items-center gap-12">
            <Controller
              name="category"
              control={control}
              render={({ field }) => (
                <Select
                  value={field.value}
                  onValueChange={field.onChange}
                  required
                >
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
                    <SelectItem value="Women's Fashion">
                      Women's Fashion
                    </SelectItem>
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
              )}
            />
            {/* SUB CATEGORY */}
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Sub Category" />
              </SelectTrigger>
              {watchCategory === "Electrical & Applience" && (
                <SelectContent>
                  <SelectItem value="Microwaves">Microwaves</SelectItem>
                  <SelectItem value="Regrigerator">Refrigerator</SelectItem>
                  <SelectItem value="Blender">Blender</SelectItem>
                  <SelectItem value="Iron">Iron</SelectItem>
                  <SelectItem value="Oven">Oven</SelectItem>
                </SelectContent>
              )}
              {/* */}
              {watchCategory === "Mobile & Accessories" && (
                <SelectContent>
                  <SelectItem value="Smartphones">Smartphones</SelectItem>
                  <SelectItem value="Powerbanks">Powerbanks</SelectItem>
                  <SelectItem value="Chargers">Chargers</SelectItem>
                  <SelectItem value="Bluetooth Earbuds">
                    Bluetooth Earbuds
                  </SelectItem>
                  <SelectItem value="Glass Protector">
                    Glass Protector
                  </SelectItem>
                </SelectContent>
              )}
              {/* */}
              {watchCategory === "Computer & Accessories" && (
                <SelectContent>
                  <SelectItem value="Laptop">Laptop</SelectItem>
                  <SelectItem value="Laptop Table">Laptop Table</SelectItem>
                  <SelectItem value="Laptop Stand">Laptop Stand</SelectItem>
                  <SelectItem value="Desktop Casing">Desktop Casing</SelectItem>
                  <SelectItem value="Monitor">Monitor</SelectItem>
                  <SelectItem value="Keyboard">Keyboard</SelectItem>
                  <SelectItem value="Mouse">Mouse</SelectItem>
                  <SelectItem value="Pendrive">Pendrive</SelectItem>
                </SelectContent>
              )}
            </Select>
          </div>
          {/* PRODUCT NAME & CODE */}
          <div className="flex justify-between items-center gap-12 mt-5">
            <Input
              type="text"
              id="productName"
              name="productName"
              placeholder="Product Name*"
            />
            <Input
              type="text"
              id="productCode"
              name="productCode"
              placeholder="Product Code"
            />
          </div>
          {/* PRODUCT PRICE & DISCOUNT_PIRCE */}
          <div className="flex justify-between items-center gap-12 mt-5">
            <Input type="number" id="price" name="price" placeholder="Price*" />
            <Input
              type="number"
              id="discountPrice"
              name="discountPrice"
              placeholder="Discount Price"
            />
          </div>
          {/* PRODUCT Availability & Quantity */}
          <div className="flex justify-between items-center gap-12 mt-5">
            <Input
              type="text"
              id="availability"
              name="availability"
              placeholder="Availability, ex: In-Stock, Out of Stock"
            />
            <Input
              type="number"
              id="quantity"
              name="quantity"
              placeholder="Quantity"
            />
          </div>
          <Textarea placeholder="Product Description" className="mt-5" />
          <div className="flex justify-center items-center mt-5">
            {/* Custom File Input */}
            <div className="flex flex-col items-center">
              {/* Hidden Input */}
              <input
                type="file"
                ref={fileInputRef}
                className="hidden"
                onChange={(e) => e.target.files[0]}
              />

              {/* Custom Button */}
              <button
                type="button"
                onClick={handleFileClick}
                className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none"
              >
                Choose File
              </button>

              {/* Display placeholder or selected file name */}
              <span className="mt-2 text-gray-600 text-sm">
                {fileInputRef.current?.files[0]?.name || "No file chosen"}
              </span>
            </div>
          </div>
          <div className="float-end mt-5 bg-accent-foreground text-white rounded-sm px-5 py-3">
            <button>Add Product</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddProduct;
