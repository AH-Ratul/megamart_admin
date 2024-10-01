import React from "react";
import logo from "../../../public/logo12.svg";
import { Link } from "react-router-dom";
import allIcons from "../../data/all-icons";

const SideBar = () => {
  const { dashboard, add, product, invoice, recipt, user } = allIcons;
  return (
    <aside className="pt-4 border-r border-r-white/15  h-[100dvh]">
      {/* logo */}
      <div className="pl-4">
        <img src={logo} alt="logo" className="w-36" />
      </div>

      {/* Account */}
      <div className="mt-9 mx-3 px-2 h-14  bg-[#9abda3] backdrop-blur-md rounded-md shadow-md flex items-center">
        <div className="text-xl border w-fit border-white/75 rounded-full p-2">
          {user}
        </div>
        <div className="ps-4 text-sm">
          <p className="font-bold text-white/90">Azmol Hasan Ratul</p>
          <span className="text-[13px] ">ahr@gmail.com</span>
        </div>
      </div>

      {/* Links */}
      <div className="flex flex-col justify-start mx-3 text-base font-medium mt-8">
        <Link className="ps-2 py-2 w-full hover:text-prime flex items-center gap-1 hover:bg-coolGray hover:bg-opacity-5 hover:rounded-sm">
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

      {/* Logout */}
      <button className="bottom-5 absolute left-7 bg-black/30 font-semibold shadow-sm w-3/4 py-2 rounded-md ">
        Logout
      </button>
    </aside>
  );
};

export default SideBar;
