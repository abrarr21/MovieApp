import loader from "../assets/loader.gif";

const Loading = () => {
  return (
    <div className="w-screen h-screen">
      <img
        className="w-full h-full object-cover"
        src={loader}
        alt="Loading..."
      />
    </div>
  );
};

export default Loading;
