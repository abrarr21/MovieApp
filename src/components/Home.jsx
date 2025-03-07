import React from "react";
import Sidebar from "./partials/Sidebar";
import TopNav from "./partials/TopNav";
import { useState } from "react";
import axios from "../utils/axios";
import { useEffect } from "react";
import Header from "./partials/Header";
import HorizontalCards from "./partials/HorizontalCards";
import Dropdown from "./partials/Dropdown";

const Home = () => {
  document.title = "MovieApp | Homepage";

  const [wallpaper, setWallpaper] = useState(null);
  const [trending, setTrending] = useState(null);
  const [category, setCategory] = useState("All");

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

  // console.log(wallpaper);

  const getTreding = async () => {
    try {
      const { data } = await axios.get(`/trending/${category}/day`);
      setTrending(data.results);
    } catch (error) {
      console.log("Error while fetching trending in HorizontalCards", error);
    }
  };

  useEffect(() => {
    !wallpaper && getWallpaper();
    getTreding();
  }, [category]);
  console.log(trending);

  return wallpaper && trending ? (
    <>
      <Sidebar />
      <div className="w-[80%] h-full overflow-auto overflow-x-hidden">
        <TopNav />
        <Header data={wallpaper} />

        <div className="p-5 flex justify-between">
          <h1 className="text-3xl font-bold text-zinc-400">Trending</h1>
          <Dropdown
            title="Filter"
            options={["Movie", "Tv", "All"]}
            func={(e) => setCategory(e.target.value)}
          />
        </div>

        <HorizontalCards data={trending} />
      </div>
    </>
  ) : (
    <h1>Loading...</h1>
  );
};

export default Home;
