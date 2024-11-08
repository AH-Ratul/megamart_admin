import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import React, { useRef, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import img from "../../../public/photo.png";

const AddProduct = () => {
  const {
    register,
    handleSubmit,
    reset,
    watch,
    control,
    setValue,
    formState: { errors },
  } = useForm();
  const watchCategory = watch("category");

  // handle state for image
  const imageRef = useRef();
  const [image, setImage] = useState("");

  const handleImageClick = () => {
    imageRef.current.click();
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setImage(file);
    setValue("productImage", file);
  };

  const handleAddProduct = (data) => {
    console.log(data);
    reset();
    setImage("");
  };
  return (
    <div className="flex justify-center items-center ml-5 mr-5 mt-[10px] mb-5">
      <div className="w-full border bg-white rounded-sm p-8  h-dv">
        <h1 className="text-3xl font-bold text-prime">Add Product</h1>
        {/* Input Fields */}
        <form onSubmit={handleSubmit(handleAddProduct)} className="mt-5">
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
                  <SelectContent {...register("category")}>
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
            <Controller
              name="subCategory"
              control={control}
              render={({ field }) => (
                <Select value={field.value} onValueChange={field.onChange}>
                  <SelectTrigger>
                    <SelectValue placeholder="Sub Category" />
                  </SelectTrigger>
                  {watchCategory === "Electrical & Applience" && (
                    <SelectContent {...register("subCategory")}>
                      <SelectItem value="Microwaves">Microwaves</SelectItem>
                      <SelectItem value="Regrigerator">Refrigerator</SelectItem>
                      <SelectItem value="Blender">Blender</SelectItem>
                      <SelectItem value="Iron">Iron</SelectItem>
                      <SelectItem value="Oven">Oven</SelectItem>
                    </SelectContent>
                  )}
                  {/* */}
                  {watchCategory === "Mobile & Accessories" && (
                    <SelectContent {...register("subCategory")}>
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
                    <SelectContent {...register("subCategory")}>
                      <SelectItem value="Laptop">Laptop</SelectItem>
                      <SelectItem value="Laptop Table">Laptop Table</SelectItem>
                      <SelectItem value="Laptop Stand">Laptop Stand</SelectItem>
                      <SelectItem value="Desktop Casing">
                        Desktop Casing
                      </SelectItem>
                      <SelectItem value="Monitor">Monitor</SelectItem>
                      <SelectItem value="Keyboard">Keyboard</SelectItem>
                      <SelectItem value="Mouse">Mouse</SelectItem>
                      <SelectItem value="Pendrive">Pendrive</SelectItem>
                    </SelectContent>
                  )}
                </Select>
              )}
            />
          </div>
          {/* PRODUCT NAME & CODE */}
          <div className="flex justify-between items-center gap-12 mt-5">
            <Input
              type="text"
              id="productName"
              name="productName"
              placeholder="Product Name*"
              {...register("productName")}
            />
            <Input
              type="text"
              id="productCode"
              name="productCode"
              placeholder="Product Code"
              {...register("productCode")}
            />
          </div>
          {/* PRODUCT PRICE & DISCOUNT_PIRCE */}
          <div className="flex justify-between items-center gap-12 mt-5">
            <Input
              type="number"
              id="price"
              name="price"
              placeholder="Price*"
              {...register("price")}
            />
            <Input
              type="number"
              id="discountPrice"
              name="discountPrice"
              placeholder="Discount Price"
              {...register("discountPrice")}
            />
          </div>
          {/* PRODUCT Availability & Quantity */}
          <div className="flex justify-between items-center gap-12 mt-5">
            <Input
              type="text"
              id="availability"
              name="availability"
              placeholder="Availability, ex: In-Stock, Out of Stock"
              {...register("availability")}
            />
            <Input
              type="number"
              id="quantity"
              name="quantity"
              placeholder="Quantity"
              {...register("quantity")}
            />
          </div>
          {/* Product Description */}
          <Textarea
            placeholder="Product Description"
            name="description"
            className="mt-5"
            {...register("description")}
          />
          <div className="flex justify-center items-center mt-5">
            {/* Custom File Input */}
            <div
              name="productImage"
              onClick={handleImageClick}
              {...register("productImage")}
              className="flex flex-col items-center border-2 border-dashed p-5 h-48"
            >
              {image ? (
                <img src={URL.createObjectURL(image)} className="w-fit h-32" />
              ) : (
                <img src={img} alt="photo" className="w-32" />
              )}
              <input
                type="file"
                ref={imageRef}
                onChange={handleImageChange}
                className="hidden"
              />

              <span className="mt-2 text-gray-600 text-sm">
                {image?.name || "No file chosen"}
              </span>
            </div>
          </div>
          {/* Submit Button */}
          <div className="flex justify-center mt-10">
            <button
              type="submit"
              className="bg-accent-foreground hover:opacity-90 text-white rounded-sm  py-2 w-1/2"
            >
              Add Product
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddProduct;
