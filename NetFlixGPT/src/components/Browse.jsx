import useNowPlayingMovies from "../hooks/useNowPlayingMovies";

const Browse = () => {
  useNowPlayingMovies();
  return (
    <div>
      <div className=" h-screen font-bold flex justify-center items-center">
        <button className="border border-black p-2">signout</button>
      </div>
    </div>
  );
};

export default Browse;
