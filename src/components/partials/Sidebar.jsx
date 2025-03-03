import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="w-[20%] h-full border-r-2 border-zinc-400 p-10">
      <h1 className="text-2xl font-bold text-white">
        <i class="ri-tv-fill text-[#6556CD] text-2xl mr-2"></i>
        <span>MovieApp</span>
      </h1>

      <nav className="flex flex-col text-zinc-400 text-lg gap-3">
        <h1 className="text-white font-semibold text-xl mt-10 mb-5">
          New Feed
        </h1>

        <Link className="hover:bg-[#6556CD] hover:text-white duration-300 rounded-lg p-5">
          <i class="ri-fire-fill mr-2"></i>
          Trending
        </Link>
        <Link className="hover:bg-[#6556CD] hover:text-white duration-300 rounded-lg p-5">
          <i class="ri-sparkling-fill mr-2"></i>
          Popular
        </Link>
        <Link className="hover:bg-[#6556CD] hover:text-white duration-300 rounded-lg p-5">
          <i class="ri-film-fill mr-2"></i>
          Movies
        </Link>
        <Link className="hover:bg-[#6556CD] hover:text-white duration-300 rounded-lg p-5">
          <i class="ri-tv-2-fill mr-2"></i>
          TV Shows
        </Link>
        <Link className="hover:bg-[#6556CD] hover:text-white duration-300 rounded-lg p-5">
          <i class="ri-team-fill mr-2"></i>
          Peoples
        </Link>
      </nav>

      <hr className="border-none h-[1px] bg-zinc-400" />

      <nav className="flex flex-col text-zinc-400 text-lg gap-3">
        <h1 className="text-white font-semibold text-xl mt-5 mb-2">
          Website Contact
        </h1>

        <Link className="hover:bg-[#6556CD] hover:text-white duration-300 rounded-lg p-3">
          <i class="ri-information-fill mr-2"></i>
          About
        </Link>
        <Link className="hover:bg-[#6556CD] hover:text-white duration-300 rounded-lg p-3">
          <i class="ri-phone-fill mr-2"></i>
          Contact
        </Link>
      </nav>
    </div>
  );
};

export default Sidebar;
