import { Link } from "react-router-dom";

const Cards = ({ data, title }) => {
  // console.log(title);
  return (
    <div className="flex flex-wrap w-full h-full px-[5%] bg-[#1F1E24]">
      {data.map((card, index) => (
        <Link
          to={`/${card.media_type || title}/details/${card.id}`}
          key={index}
          className="relative w-[25vh] mr-[5%] mb-[5%]"
        >
          <img
            className="h-[40vh] object-cover shadow-[8px_17px_38px_2px_rgba(0,0,0,.5)]"
            src={`https://image.tmdb.org/t/p/original/${card.poster_path || card.backdrop_path || card.profile_path}`}
            alt=""
          />

          <h1 className="text-2xl text-zinc-200 font-semibold mt-3">
            {card.name ||
              card.title ||
              card.original_title ||
              card.original_name}
          </h1>

          {card.vote_average && (
            <div className="absolute right-[-10%] bottom-[35%] w-[6vh] h-[6vh] bg-yellow-600 text-white flex justify-center items-center rounded-full text-xl font-semibold">
              {(card.vote_average * 10).toFixed()}
              <sup>%</sup>
            </div>
          )}
        </Link>
      ))}
    </div>
  );
};

export default Cards;
