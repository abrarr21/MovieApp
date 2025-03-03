import React from "react";
import Sidebar from "./partials/Sidebar";
import TopNav from "./partials/TopNav";

const Home = () => {
  document.title = "MovieApp | Homepage";
  return (
    <>
      <Sidebar />
      <div className="w-[80%] h-full">
        <TopNav />
      </div>
    </>
  );
};

export default Home;
