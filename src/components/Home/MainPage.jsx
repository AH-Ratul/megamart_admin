import { Search } from "lucide-react";
import React from "react";
import allIcons from "../../data/all-icons";

const MainPage = () => {
  const { user } = allIcons;
  return (
    <main className="w-[100dvw]">
      <header className="flex justify-between items-center border-b border-b-white/15 py-2 px-5 ">
        <div className="w-full flex-1">
          <form>
            <div className="relative">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <input
                type="search"
                placeholder="Search products..."
                className="border border-white/15 rounded-md py-2 px-3 text-sm focus:outline-none focus:ring-1 focus:ring-prime w-full appearance-none bg-[#202334] pl-8 shadow-none md:w-2/3 lg:w-1/3"
              />
            </div>
          </form>
        </div>
        <div className="text-xl border border-white/25 rounded-full p-2">
          {user}
        </div>
      </header>
      <div className="bg-[#12141D]  p-3">
        <div className="border border-white/15 bg-raisinBlack  w-44 h-20 py-6 text-center ">
          Total: $33566
        </div>
      </div>
    </main>
  );
};

export default MainPage;
