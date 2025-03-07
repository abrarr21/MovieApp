const HorizontalCards = ({ data }) => {
  return (
    <div className="w-[100%]  flex overflow-y-hidden mb-5 p-5 ">
      {data.map((d, i) => (
        <div key={i} className="min-w-[15%] bg-zinc-900 mr-5 mb-5">
          <img
            className="w-full h-[55%] object-cover"
            src={`https://image.tmdb.org/t/p/original/${d.backdrop_path || d.poster_path}`}
            alt=""
          />

          <div className="h-[45%] text-white p-2">
            <h1 className=" text-lg font-bold">
              {d.title || d.name || d.original_name || d.original_title}
            </h1>

            <p className="text-sm">
              {d.overview.slice(0, 50)}...
              <span className="text-zinc-500">more</span>
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default HorizontalCards;
