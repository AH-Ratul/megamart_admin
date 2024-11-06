import React from "react";
import SideBar from "../components/SideBar/SideBar";
import { Outlet } from "react-router-dom";
import Header from "@/components/Shared/Header/Header";

const Main = () => {
  return (
    <main className="bg-muted text-[#2F2F2F] font-LeagueGothic flex ">
      <div className="top-0 bg-white left-0 fixed w-60 2xl:w-64">
        <SideBar />
      </div>

      <div className="ml-60 2xl:ml-64 w-full overflow-y-auto overflow-x-hidden  h-screen">
        <Header />
        <Outlet />
      </div>
    </main>
  );
};

export default Main;
