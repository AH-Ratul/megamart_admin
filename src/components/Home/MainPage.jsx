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

const MainPage = () => {
  const { user } = allIcons;
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
              <DropdownMenuItem>Logout</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </header>
      <div className="flex items-center gap-4 ml-5  mt-[15px]">
        <div className="rounded-xl border shadow-sm backdrop-blur-lg bg-white w-64 2xl:w-80 h-36 2xl:h-40 p-4 flex flex-col">
          <p className="text-lg 2xl:text-xl text-muted-foreground">
            Total Revenue
          </p>
          <span className="text-2xl 2xl:text-3xl font-bold my-2">
            &#2547; 554545
          </span>
          <span className="text-xs 2xl:text-sm tracking-wider text-white bg-black w-fit rounded-full px-2">
            +12%
          </span>
        </div>
        <div className="rounded-xl border shadow-sm backdrop-blur-lg bg-white w-64 2xl:w-80 h-36 2xl:h-40 p-4 flex flex-col">
          <p className="text-lg 2xl:text-xl text-muted-foreground">
            Total Orders
          </p>
          <span className="text-2xl 2xl:text-3xl font-bold my-2">554</span>
          <span className="text-xs 2xl:text-sm tracking-wider text-white bg-black w-fit rounded-full px-2">
            +10%
          </span>
        </div>
        <div className="rounded-xl border shadow-sm backdrop-blur-lg bg-white w-64 2xl:w-80 h-36 2xl:h-40 p-4 flex flex-col">
          <p className="text-lg 2xl:text-xl text-muted-foreground">
            Total Users
          </p>
          <span className="text-2xl 2xl:text-3xl font-bold my-2">53</span>
          <span className="text-xs 2xl:text-sm tracking-wider text-white bg-black w-fit rounded-full px-2">
            +2%
          </span>
        </div>
        <div className="rounded-xl border shadow-sm backdrop-blur-lg bg-white w-64 2xl:w-80 h-36 2xl:h-40 p-4 flex flex-col">
          <p className="text-lg 2xl:text-xl text-muted-foreground">
            Total Sales
          </p>
          <span className="text-2xl 2xl:text-3xl font-bold my-2">329</span>
          <span className="text-xs 2xl:text-sm tracking-wider text-white bg-black w-fit rounded-full px-2">
            +8%
          </span>
        </div>
      </div>
    </main>
  );
};

export default MainPage;
