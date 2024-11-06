import React from "react";
import { Search } from "lucide-react";
import allIcons from "../../../data/all-icons";
import { useLogOutMutation } from "@/redux/api/user_api";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logout } from "@/redux/slice/authSlice";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Header = () => {
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
  );
};

export default Header;
