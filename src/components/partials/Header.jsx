import React from "react";
import { Link } from "react-router-dom";

const Header = ({ data }) => {
  return (
    <div
      style={{
        background: `linear-gradient(rgba(0,0,0,.3),rgba(0,0,0,.5),rgba(0,0,0,.7)), url(https://image.tmdb.org/t/p/original/${data.backdrop_path || data.profile_path})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
      className="w-full h-[50vh] flex flex-col justify-end items-start p-[5%]"
    >
      <h1 className="w-[60%] text-white text-4xl font-black ">
        {data.name || data.title || data.original_name || data.original_title}
      </h1>

      <p className="w-[60%] mt-2 text-white">
        {data.overview.slice(0, 200)}...
        <Link className="text-blue-400">more</Link>
      </p>

      <p className="text-white mt-2">
        <i className="ri-megaphone-fill text-purple-600"></i>
        {data.release_date || "NO INFO"}
        <i className="ri-album-fill text-purple-600 ml-5"></i>
        {data.media_type.toUpperCase()}
      </p>

      <Link className="bg-[#6556CD] p-3 rounded text-white mt-2">
        Watch Trailer
      </Link>
    </div>
  );
};

export default Header;
