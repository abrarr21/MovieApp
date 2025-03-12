import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Link, useLocation, useNavigate, useParams } from "react-router-dom";
import { asyncloadperson, removeperson } from "../store/actions/personActions";
import { useSelector } from "react-redux";
import Loading from "./Loading";
import HorizontalCards from "./partials/HorizontalCards";

const personDetails = () => {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const { id } = useParams();
  const { info } = useSelector((state) => state.person);
  const dispatch = useDispatch();

  console.log(info);
  useEffect(() => {
    dispatch(asyncloadperson(id));

    return () => {
      dispatch(removeperson());
    };
  }, []);

  const abrarrr_21 = "abrarrr_21";

  return info ? (
    <div className="px-[10%] w-screen">
      <nav className="h-[10vh] w-full text-white flex items-center gap-10 text-xl">
        <Link
          className="hover:text-[#6556CD] ri-arrow-left-line"
          onClick={() => navigate(-1)}
        ></Link>
      </nav>
      <div className="w-full flex">
        <div className="w-[25%]">
          <img
            className="h-[50vh] object-cover shadow-[8px_17px_38px_2px_rgba(0,0,0,.5)]"
            src={`https://image.tmdb.org/t/p/original/${info?.detail?.profile_path}`}
            alt=""
          />

          <hr className="mt-10 mb-5 border-none h-[2px] bg-zinc-600" />

          <div className="text-white text-2xl flex gap-x-8">
            <a
              target="_blank"
              href={`https://www.facebook.com/${info?.external_ids?.facebook_id}`}
            >
              <i className="ri-facebook-fill"></i>
            </a>
            <a
              target="_blank"
              href={`https://www.instagram.com/${info?.external_ids?.instagram_id}`}
            >
              <i className="ri-instagram-fill"></i>
            </a>
            <a target="_blank" href={`https://x.com/${abrarrr_21}`}>
              <i className="ri-twitter-x-fill"></i>
            </a>
          </div>

          <h1 className=" text-3xl text-nowrap text-zinc-400 my-4">
            Personal Informations
          </h1>
          <h1 className=" text-xl text-nowrap text-zinc-400">
            Known for: {info?.detail?.known_for_department}
          </h1>
          <h1 className=" text-xl text-nowrap text-zinc-400">
            Gender: {info?.detail?.gender === 1 ? "Female" : "Male"}
          </h1>
          <h1 className=" text-xl text-nowrap text-zinc-400">
            Birthday: {info?.detail?.birthday}
          </h1>
        </div>

        <div className="w-[75%] ml-[3%]">
          <h1 className=" text-5xl text-nowrap text-zinc-300 my-4 font-bold">
            {info?.detail?.name}
          </h1>

          <h1 className=" text-2xl font-semibold text-zinc-400">Overview:</h1>
          <p className="text-sm text-zinc-400 mb-3">
            {info?.detail?.biography}
          </p>

          <h1 className="text-zinc-400 text-2xl font-semibold">Credits</h1>
          <HorizontalCards data={info?.combined_credits.cast} />
        </div>
      </div>
    </div>
  ) : (
    <Loading />
  );
};

export default personDetails;
