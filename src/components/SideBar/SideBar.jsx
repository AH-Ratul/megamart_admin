import React from "react";
import logo from "../../../public/logo123.svg";
import { Link } from "react-router-dom";
import allIcons from "../../data/all-icons";

const SideBar = () => {
  const { dashboard, add, product, invoice, recipt } = allIcons;
  return (
    <aside className="pt-4 border-r border-r-white/15 w-72 h-[100dvh]">
      <div className="pl-4">
        <img src={logo} alt="logo" className="w-36" />
      </div>
      <div className="flex flex-col justify-start mx-3 text-base font-medium mt-8">
        <Link className="ps-2 py-2 w-full hover:text-prime flex items-center gap-1 hover:bg-coolGray hover:bg-opacity-20 hover:rounded-sm">
          {dashboard}Dashboard
        </Link>
        <Link className="ps-2 py-2 w-full hover:text-prime flex items-center gap-1 hover:bg-coolGray hover:bg-opacity-20 hover:rounded-sm">
          {add}Add Product
        </Link>
        <Link className="ps-2 py-2 w-full hover:text-prime flex items-center gap-1 hover:bg-coolGray hover:bg-opacity-20 hover:rounded-sm">
          {product}Manage Products
        </Link>
        <Link className="ps-2 py-2 w-full hover:text-prime flex items-center gap-1 hover:bg-coolGray hover:bg-opacity-20 hover:rounded-sm">
          {recipt}Orders
        </Link>
        <Link className="ps-2 py-2 w-full hover:text-prime flex items-center gap-1 hover:bg-coolGray hover:bg-opacity-20 hover:rounded-sm">
          {invoice}Invoices
        </Link>
        <Link></Link>
      </div>
    </aside>
  );
};

export default SideBar;
