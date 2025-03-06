import React from "react";
import Sidebar from "./partials/Sidebar";
import TopNav from "./partials/TopNav";
import { useState } from "react";
import axios from "../utils/axios";
import { useEffect } from "react";
import Header from "./partials/Header";

const Home = () => {
  document.title = "MovieApp | Homepage";

  const [wallpaper, setWallpaper] = useState(null);

  const getWallpaper = async () => {
    try {
      const { data } = await axios.get(`/trending/all/day`);
      let randomdata =
        data.results[(Math.random() * data.results.length).toFixed()];
      setWallpaper(randomdata);
    } catch (error) {
      console.log("in home, wallpaper fetch error", error);
    }
  };

  console.log(wallpaper);

  useEffect(() => {
    !wallpaper && getWallpaper();
  }, []);

  return wallpaper ? (
    <>
      <Sidebar />
      <div className="w-[80%] h-full">
        <TopNav />
        <Header data={wallpaper} />
      </div>
    </>
  ) : (
    <h1>Loading...</h1>
  );
};

export default Home;
