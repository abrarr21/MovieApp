import { useState, useEffect } from "react";
import axios from "../utils/axios";
import { useNavigate } from "react-router-dom";
import TopNav from "./partials/TopNav";
import Dropdown from "./partials/Dropdown";
import InfiniteScroll from "react-infinite-scroll-component";
import Cards from "./partials/Cards";
import Loading from "./Loading";

const Tvshows = () => {
  document.title = "MovieApp | TvShows";
  const navigate = useNavigate();
  const [category, setCategory] = useState("airing_today");
  const [tvshows, setTvshows] = useState([]);
  const [page, setPage] = useState(1);
  const [hasmore, setHasmore] = useState(true);

  const getTvshows = async () => {
    try {
      const { data } = await axios.get(`/tv/${category}?page=${page}`);
      if (data.results.length > 0) {
        setTvshows((prevState) => [...prevState, ...data.results]);
      } else {
        setHasmore(false);
      }
    } catch (error) {
      console.log(`Error while fetching TvShows page : ${error}`);
    }
  };

  const refreshHandle = () => {
    if (tvshows.length === 0) {
      getTvshows();
    } else {
      setPage(1);
      setTvshows([]);
      getTvshows();
    }
  };

  useEffect(() => {
    refreshHandle();
  }, [category]);

  const arrowClicked = () => {
    navigate(-1);
  };

  return tvshows.length > 0 ? (
    <div className="w-screen h-screen">
      <div className="px-[5%] w-full flex items-center justify-between">
        <h1 className="text-2xl font-semibold text-zinc-400">
          <i
            onClick={arrowClicked}
            className="ri-arrow-left-fill hover:text-[#6566cd] mr-2 cursor-pointer"
          ></i>
          Tv Shows
        </h1>

        <div className="w-[75%%] flex items-center">
          <TopNav />

          <Dropdown
            title="Category"
            options={["on_the_air", "top_rated", "upcoming", "airing_today"]}
            func={(e) => setCategory(e.target.value)}
          />
        </div>
      </div>

      <InfiniteScroll
        loader={<h1 className="text-white">Loading....</h1>}
        dataLength={tvshows.length}
        hasMore={hasmore}
        next={getTvshows}
      >
        <Cards data={tvshows} title="tv" />
      </InfiniteScroll>
    </div>
  ) : (
    <Loading />
  );
};

export default Tvshows;
