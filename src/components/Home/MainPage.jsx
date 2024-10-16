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
        <div className="">
          <DropdownMenu>
            <DropdownMenuTrigger className="border bg-white rounded-full p-2 text-xl">{user}</DropdownMenuTrigger>
            <DropdownMenuContent cls>
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Profile</DropdownMenuItem>
              <DropdownMenuItem>Settings</DropdownMenuItem>
              <DropdownMenuItem>Logout</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </header>
      <div className="bg-[#12141D flex items-center gap-9 ml-5  mt-[15px]">
        <div className="rounded-xl border shadow-sm backdrop-blur-lg bg-white w-64 h-28 flex flex-col justify-center items-center text-2xl">
          <p>Total Revenue</p>
          <span>$55454543</span>
        </div>
        <div className="rounded-xl border shadow-sm backdrop-blur-lg bg-white w-64 h-28 flex flex-col justify-center items-center text-2xl">
          <p>Total Revenue</p>
          <span>$55454543</span>
        </div>
        <div className="rounded-xl border shadow-sm backdrop-blur-lg bg-white w-64 h-28 flex flex-col justify-center items-center text-2xl">
          <p>Total Revenue</p>
          <span>$55454543</span>
        </div>
        
      </div>
    </main>
  );
};

export default MainPage;
