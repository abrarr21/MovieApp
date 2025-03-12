import notfound from "../assets/notfound.gif";

const NotFound404 = () => {
  return (
    <div className="w-screen h-screen">
      <img
        className="w-full h-full object-cover"
        src={notfound}
        alt="Loading..."
      />
    </div>
  );
};

export default NotFound404;
