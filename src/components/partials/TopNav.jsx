import { useState } from "react";
import { Link } from "react-router-dom";

const TopNav = () => {
  const [query, setQuery] = useState("");
  console.log(query);

  return (
    <div className="w-full h-[10vh] relative flex justify-start items-center ml-[20%]">
      <i class="ri-search-line text-zinc-400 text-3xl"></i>
      <input
        onChange={(e) => setQuery(e.target.value)}
        value={query}
        className="w-[50%] text-zinc-200 mx-10 p-5 text-xl outline-none border-none bg-transparent"
        type="text"
        placeholder="Search Anything"
      />

      {query.length > 0 && (
        <i
          onClick={() => setQuery("")}
          class="ri-close-fill text-zinc-400 text-3xl cursor-pointer"
        ></i>
      )}

      <div className="w-[50%] max-h-[50vh] absolute bg-zinc-200 top-[90%] overflow-auto rounded">
        {/* <Link className="hover:text-black hover:bg-zinc-300 duration-300 font-semibold text-zinc-600 w-[100%] p-7 flex justify-start items-center border-b-2 border-zinc-100"> */}
        {/*   <img src="" alt="" /> */}
        {/*   <span>Hello</span> */}
        {/* </Link> */}
      </div>
    </div>
  );
};

export default TopNav;
