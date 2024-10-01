import { Search } from "lucide-react";
import React from "react";
import allIcons from "../../data/all-icons";

const MainPage = () => {
  const { user } = allIcons;
  return (
    <main>
      <header className="flex gap-20 items-center  py-2 px-5 ">
        <div>
          <h1 className="text-2xl font-bold font-LeagueGothic text-prime">
            DASHBOARD
          </h1>
        </div>
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
      </header>
      <div className="bg-[#12141D flex items-center gap-9 p-3 mt-[10px]">
        <div className="rounded-md shadow-lg backdrop-blur-lg bg-green-500 w-64 h-28 flex flex-col justify-center items-center text-white text-2xl">
          <p>Total Revenue</p>
          <span>$55454543</span>
        </div>
        <div className="rounded-md shadow-lg backdrop-blur-lg bg-green-500 w-64 h-28 flex flex-col justify-center items-center text-white text-2xl">
          <p>Total Revenue</p>
          <span>$55454543</span>
        </div>
        <div className="rounded-md shadow-lg backdrop-blur-lg bg-green-500 w-64 h-28 flex flex-col justify-center items-center text-white text-2xl">
          <p>Total Revenue</p>
          <span>$55454543</span>
        </div>
      </div>
    </main>
  );
};

export default MainPage;
