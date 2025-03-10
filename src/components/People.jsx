import { useState, useEffect } from "react";
import axios from "../utils/axios";
import { useNavigate } from "react-router-dom";
import TopNav from "./partials/TopNav";
import InfiniteScroll from "react-infinite-scroll-component";
import Cards from "./partials/Cards";
import Loading from "./Loading";

const People = () => {
  document.title = "MovieApp | People";
  const navigate = useNavigate();
  const [people, setPeople] = useState([]);
  const [category, setCategory] = useState("popular");
  const [page, setPage] = useState(1);
  const [hasmore, setHasmore] = useState(true);

  const getPeople = async () => {
    try {
      const { data } = await axios.get(`/person/${category}?page=${page}`);
      if (data.results.length > 0) {
        setPeople((prevState) => [...prevState, ...data.results]);
        setPage(page + 1);
      } else {
        setHasmore(false);
      }
    } catch (error) {
      console.log(`Error while fetching People page: ${error}`);
    }
  };

  const refreshHandle = () => {
    if (people.length === 0) {
      getPeople();
    } else {
      setPage(1);
      setPeople([]);
      getPeople();
    }
  };

  useEffect(() => {
    refreshHandle();
  }, [category]);

  const arrowClicked = () => {
    navigate(-1);
  };

  return people.length > 0 ? (
    <div className="w-screen h-screen">
      <div className="px-[5%] w-full flex items-center justify-between">
        <h1 className="text-2xl font-semibold text-zinc-400">
          <i
            onClick={arrowClicked}
            className="ri-arrow-left-fill hover:text-[#6566cd] mr-2 cursor-pointer"
          ></i>
          People
        </h1>

        <div className="w-[75%%] flex items-center">
          <TopNav />
        </div>
      </div>

      <InfiniteScroll
        loader={<h1 className="text-white">Loading....</h1>}
        dataLength={people.length}
        hasMore={hasmore}
        next={getPeople}
      >
        <Cards data={people} title={category} />
      </InfiniteScroll>
    </div>
  ) : (
    <Loading />
  );
};

export default People;
