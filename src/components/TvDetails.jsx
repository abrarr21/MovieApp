import { useEffect } from "react";
import { useDispatch } from "react-redux";
import {
  Link,
  Outlet,
  useLocation,
  useNavigate,
  useParams,
} from "react-router-dom";
import { asyncloadtv, removetv } from "../store/actions/tvActions";
import { useSelector } from "react-redux";
import Loading from "./Loading";
import HorizontalCards from "./partials/HorizontalCards";
const TvDetails = () => {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const { id } = useParams();
  const { info } = useSelector((state) => state.tv);
  const dispatch = useDispatch();

  // console.log(info);
  useEffect(() => {
    dispatch(asyncloadtv(id));

    return () => {
      dispatch(removetv());
    };
  }, []);

  return info ? (
    <div
      style={{
        background: `linear-gradient(rgba(0,0,0,.3),rgba(0,0,0,.5),rgba(0,0,0,.7)), url(https://image.tmdb.org/t/p/original/${info.detail.backdrop_path})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
      className="w-screen h-[150vh] px-[10%] relative"
    >
      {/* Part-1 Navigation */}
      <nav className="w-full h-[10vh] text-white flex items-center text-2xl gap-10">
        <Link
          className="hover:text-[#6556CD] ri-arrow-left-line"
          onClick={() => navigate(-1)}
        ></Link>

        <a target="_blank" href={info?.detail?.homepage}>
          <i className="ri-external-link-line"></i>
        </a>
        <a
          target="_blank"
          href={`https://www.wikidata.org/wiki/${info?.external_ids?.wikidata_id}`}
        >
          <i className="ri-earth-fill"></i>
        </a>
        <a
          target="_blank"
          href={`https://www.imdb.com/title/${info?.external_ids?.imdb_id}`}
        >
          imdb
        </a>
      </nav>

      {/* Part-2 Poster and Details */}
      <div className="w-full flex">
        <img
          className="h-[50vh] object-cover shadow-[8px_17px_38px_2px_rgba(0,0,0,.5)]"
          src={`https://image.tmdb.org/t/p/original/${info?.detail?.poster_path || info?.detail?.backdrop_path}`}
          alt=""
        />

        <div className="ml-[5%] text-white">
          <h1 className="text-5xl text-white font-black">
            {info?.detail?.name ||
              info?.detail?.title ||
              info?.detail?.original_title ||
              info?.detail?.original_name}

            <small className="text-xl font-bold text-zinc-300">
              ({info?.detail?.first_air_date.split("-")[0]})
            </small>
          </h1>

          <div className="mt-3 mb-4 flex text-zinc-100 gap-x-3 items-center">
            <span className=" w-[6vh] h-[6vh] bg-yellow-600 text-white flex justify-center items-center rounded-full text-xl font-semibold">
              {(info?.detail.vote_average * 10).toFixed()}
              <sup>%</sup>
            </span>
            <h1 className="w-[60px] font-bold text-2xl loading-6">
              User Score
            </h1>
            <h1>{info?.detail?.vote_average}</h1>
            <h1>{info?.detail?.genres.map((g) => g?.name).join(",")}</h1>
            <h1 className="font-bold">
              {info?.detail?.seasons?.length} Seasons
            </h1>
          </div>

          <h1 className="text-xl italic font-semibold">
            {info?.detail?.tagline}
          </h1>

          <h1 className="text-2xl mt-3">Overview</h1>
          <p className="mb-5">{info?.detail?.overview}</p>

          <Link
            className="py-3 px-7 bg-[#6556CD] rounded-lg"
            to={`${pathname}/trailer`}
          >
            <i className="ri-play-fill text-xl mr-2"></i>
            Play Trailer
          </Link>
        </div>
      </div>

      {/* Part-3 Available on Platforms */}
      <div className="w-[80%] flex flex-col gap-y-5 mt-10">
        <div>
          {info?.watchProvider && info?.watchProvider?.flatrate && (
            <div className="flex gap-x-10 items-center text-white font-bold">
              <h1>Available on Platform</h1>
              {info?.watchProvider?.flatrate.map((w, i) => (
                <img
                  key={i}
                  title={w.provider_name}
                  className="w-[5vh] h-[5vh] object-cover rounded-md cursor-pointer mb-1"
                  src={`https://image.tmdb.org/t/p/original/${w.logo_path}`}
                />
              ))}
            </div>
          )}

          {info?.watchProvider && info?.watchProvider?.rent && (
            <div className="flex gap-x-10 items-center text-white font-bold">
              <h1>Available to Rent</h1>
              {info?.watchProvider?.rent.map((w, i) => (
                <img
                  key={i}
                  title={w.provider_name}
                  className="w-[5vh] h-[5vh] object-cover rounded-md cursor-pointer mt-1 mb-1"
                  src={`https://image.tmdb.org/t/p/original/${w.logo_path}`}
                />
              ))}
            </div>
          )}

          {info?.watchProvider && info?.watchProvider?.buy && (
            <div className="flex gap-x-10 items-center text-white font-bold">
              <h1>Available to buy</h1>
              {info?.watchProvider?.buy.map((w, i) => (
                <img
                  key={i}
                  title={w.provider_name}
                  className="w-[5vh] h-[5vh] object-cover rounded-md cursor-pointer mt-1"
                  src={`https://image.tmdb.org/t/p/original/${w.logo_path}`}
                />
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Part-4 Recommendations and Similars */}

      <hr className="text-zinc-600 mt-10 mb-5" />
      <h1 className="text-white text-3xl font-bold">Recommendations </h1>

      <HorizontalCards
        data={
          info?.recommendations.length > 0
            ? info?.recommendations
            : info?.similar
        }
      />

      <Outlet />
    </div>
  ) : (
    <Loading />
  );
};

export default TvDetails;
