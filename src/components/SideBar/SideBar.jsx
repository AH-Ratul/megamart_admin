import React from "react";
import logo from "../../../public/logo12.svg";
import { Link } from "react-router-dom";
import allIcons from "../../data/all-icons";

const SideBar = () => {
  const { dashboard, add, product, invoice, recipt, user } = allIcons;
  return (
    <aside className="pt-4 border-r h-[100dvh]">
      {/* logo */}
      <div className="pl-4">
        <img src={logo} alt="logo" className="w-36 2xl:w-44" />
      </div>

      {/* Links */}
      <div className="flex flex-col justify-start mx-3 text-base font-medium mt-8">
        <Link
          to="/"
          className="ps-2 py-2 w-full hover:text-prime flex items-center gap-1 hover:bg-accent hover:bg-opacity-5 hover:rounded-sm"
        >
          <span className="text-lg 2xl:text-xl">{dashboard}</span>
          <span className="2xl:text-lg">Dashboard</span>
        </Link>
        <Link
          to="/addProduct"
          className="ps-2 py-2 w-full hover:text-prime flex items-center gap-1 hover:bg-accent hover:bg-opacity-5 hover:rounded-sm"
        >
          <span className="text-lg 2xl:text-2xl">{add}</span>
          <span className="2xl:text-lg">Add Product</span>
        </Link>
        <Link className="ps-2 py-2 w-full hover:text-prime flex items-center gap-1 hover:bg-accent hover:bg-opacity-5 hover:rounded-sm">
          <span className="text-lg 2xl:text-2xl">{product}</span>
          <span className="2xl:text-lg">Manage Products</span>
        </Link>
        <Link className="ps-2 py-2 w-full hover:text-prime flex items-center gap-1 hover:bg-accent hover:bg-opacity-5 hover:rounded-sm">
          <span className="text-lg 2xl:text-2xl">{recipt}</span>
          <span className="2xl:text-lg">Orders</span>
        </Link>
        <Link className="ps-2 py-2 w-full hover:text-prime flex items-center gap-1 hover:bg-accent hover:rounded-sm">
          <span className="text-lg 2xl:text-2xl">{invoice}</span>
          <span className=" 2xl:text-lg">Invoices</span>
        </Link>
      </div>
    </aside>
  );
};

export default SideBar;
