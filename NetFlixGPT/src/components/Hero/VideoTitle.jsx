import SecondSection from "./SecondSection";

const VideoTitle = ({ movie }) => {
  const displayMovie = movie?.movies.results[0];
  return (
    <div
      className=" border border-black  h-full flex justify-center flex-col pl-10 pt-32 select-none 
      bg-gradient-to-r from-black justify-around
    "
    >
      <div className="">
        <div className="w-1/2 ">
          <p className="text-6xl text-white ">{displayMovie?.original_title}</p>
          <p className="text-sm w-3/4 my-6 text-white">
            {displayMovie?.overview}
          </p>
        </div>

        <div className=" ">
          <button className="border border-white py-3 px-5 bg-white text-black rounded-md">
            ▶️ Play
          </button>
          <button className=" py-3 px-5 ml-2 text-white rounded-md bg-gray-500 bg-opacity-30">
            <span className="border border-white rounded-full px-2 text-center mr-1">
              ℹ️
            </span>
            More info
          </button>
        </div>
      </div>
      {/* <SecondSection /> */}
    </div>
  );
};

export default VideoTitle;
