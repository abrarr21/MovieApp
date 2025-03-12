import ReactPlayer from "react-player";
import { useSelector } from "react-redux";
import { Link, useLocation, useNavigate } from "react-router-dom";
import NotFound404 from "../NotFound404";

const Trailer = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const category = pathname.includes("movie") ? "movie" : "tv";
  const ytvideo = useSelector((state) => state[category].info.videos);

  const handleClick = () => {
    navigate(-1);
  };

  return (
    <div className="absolute bg-black bg-opacity-85 z-10 top-0 left-0 w-screen h-screen flex items-center justify-center">
      <Link
        onClick={handleClick}
        className="absolute top-[5%] right-[5%] text-white text-2xl hover:text-[#6556CD] ri-close-line"
      ></Link>

      {ytvideo ? (
        <ReactPlayer
          controls
          height={600}
          width={1200}
          url={`https://www.youtube.com/watch?v=${ytvideo.key}`}
        />
      ) : (
        <NotFound404 />
      )}
    </div>
  );
};

export default Trailer;
