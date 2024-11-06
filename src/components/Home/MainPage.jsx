import { Search } from "lucide-react";
import React from "react";
import allIcons from "../../data/all-icons";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { useLogOutMutation } from "@/redux/api/user_api";
import { useDispatch } from "react-redux";
import { Outlet, useNavigate } from "react-router-dom";
import { logout } from "@/redux/slice/authSlice";

const MainPage = () => {
  const { user } = allIcons;
  const [logOut] = useLogOutMutation();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogOut = async () => {
    await logOut();
    dispatch(logout());
    navigate("/login");
  };

  return (
    <main>
      <header className="flex justify-between items-center py-2 px-5 ">
        <div className="w-96 ">
          <form>
            <div className="relative">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 z-10 text-muted-foreground" />
              <input
                type="search"
                placeholder="Search products..."
                className="border border-gray-300 bg-white/90 backdrop-blur-md rounded-xl py-2 px-3 text-sm  w-full 2xl:w-[500px] pl-8 shadow-sm text-gray-700  placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-prime"
              />
            </div>
          </form>
        </div>
        <div>
          <DropdownMenu>
            <DropdownMenuTrigger className="border bg-white rounded-full p-2 2xl:p-2.5 text-xl 2xl:text-2xl">
              {user}
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Profile</DropdownMenuItem>
              <DropdownMenuItem>Settings</DropdownMenuItem>
              <button onClick={handleLogOut} className="w-full">
                <DropdownMenuItem>Logout</DropdownMenuItem>
              </button>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </header>
      <div className="flex justify-center items-center gap-5 ml-5 mr-5 mt-[15px]">
        <div className="rounded-xl border shadow-sm backdrop-blur-lg bg-white w-full h-36 2xl:h-44 p-4 2xl:pl-7 flex flex-col">
          <p className="text-lg 2xl:text-xl text-muted-foreground">
            Total Revenue
          </p>
          <span className="text-2xl 2xl:text-4xl font-bold my-2 2xl:my-5">
            &#2547; 554545
          </span>
          <span className="text-xs 2xl:text-base tracking-wider text-white bg-black w-fit rounded-full px-2">
            +12%
          </span>
        </div>
        <div className="rounded-xl border shadow-sm backdrop-blur-lg bg-white w-full h-36 2xl:h-44 p-4 2xl:pl-7 flex flex-col">
          <p className="text-lg 2xl:text-xl text-muted-foreground">
            Total Orders
          </p>
          <span className="text-2xl 2xl:text-4xl font-bold my-2 2xl:my-5">
            554
          </span>
          <span className="text-xs 2xl:text-sm tracking-wider text-white bg-black w-fit rounded-full px-2">
            +10%
          </span>
        </div>
        <div className="rounded-xl border shadow-sm backdrop-blur-lg bg-white w-full h-36 2xl:h-44 p-4 2xl:pl-7 flex flex-col">
          <p className="text-lg 2xl:text-xl text-muted-foreground">
            Total Users
          </p>
          <span className="text-2xl 2xl:text-4xl font-bold my-2 2xl:my-5">
            153
          </span>
          <span className="text-xs 2xl:text-sm tracking-wider text-white bg-black w-fit rounded-full px-2">
            +2%
          </span>
        </div>
        <div className="rounded-xl border shadow-sm backdrop-blur-lg bg-white w-full h-36 2xl:h-44 p-4 2xl:pl-7 flex flex-col">
          <p className="text-lg 2xl:text-xl text-muted-foreground">
            Total Sales
          </p>
          <span className="text-2xl 2xl:text-4xl font-bold my-2 2xl:my-5">
            329
          </span>
          <span className="text-xs 2xl:text-sm tracking-wider text-white bg-black w-fit rounded-full px-2">
            +8%
          </span>
        </div>
      </div>
      <div>
        <Outlet />
      </div>
    </main>
  );
};

export default MainPage;
