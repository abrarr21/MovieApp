import { useState, useEffect } from "react";
import axios from "../utils/axios";
import { useNavigate } from "react-router-dom";
import TopNav from "./partials/TopNav";
import Dropdown from "./partials/Dropdown";
import InfiniteScroll from "react-infinite-scroll-component";
import Cards from "./partials/Cards";
import Loading from "./Loading";

const Movie = () => {
  document.title = "MovieApp | Movie";
  const navigate = useNavigate();
  const [movie, setMovie] = useState([]);
  const [category, setCategory] = useState("now_playing");
  const [page, setPage] = useState(1);
  const [hasmore, setHasmore] = useState(true);

  const getMovie = async () => {
    try {
      const { data } = await axios.get(`/movie/${category}?page=${page}`);
      if (data.results.length > 0) {
        setMovie((prevState) => [...prevState, ...data.results]);
        setPage(page + 1);
      } else {
        setHasmore(false);
      }
    } catch (error) {
      console.log("Error while fetching the movie page: ", error);
    }
  };

  const refreshHandle = () => {
    if (movie.length === 0) {
      getMovie();
    } else {
      setPage(1);
      setMovie([]);
      getMovie();
    }
  };

  useEffect(() => {
    refreshHandle();
  }, [category]);

  const arrowClicked = () => {
    navigate(-1);
  };

  return movie.length > 0 ? (
    <div className="w-screen h-screen">
      <div className="px-[5%] w-full flex items-center justify-between">
        <h1 className="text-2xl font-semibold text-zinc-400">
          <i
            onClick={arrowClicked}
            className="ri-arrow-left-fill hover:text-[#6566cd] mr-2 cursor-pointer"
          ></i>
          Movie
        </h1>

        <div className="w-[75%%] flex items-center">
          <TopNav />

          <Dropdown
            title="Category"
            options={["popular", "top_rated", "upcoming", "now_playing"]}
            func={(e) => setCategory(e.target.value)}
          />
        </div>
      </div>

      <InfiniteScroll
        loader={<h1 className="text-white">Loading....</h1>}
        dataLength={movie.length}
        hasMore={hasmore}
        next={getMovie}
      >
        <Cards data={movie} title="movie" />
      </InfiniteScroll>
    </div>
  ) : (
    <Loading />
  );
};

export default Movie;
