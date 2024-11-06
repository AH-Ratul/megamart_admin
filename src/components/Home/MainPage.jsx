import React from "react";

const MainPage = () => {
  return (
    <main>
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
        
      </div>
    </main>
  );
};

export default MainPage;
