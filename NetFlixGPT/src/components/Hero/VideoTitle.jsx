import { useSelector } from "react-redux";

const VideoTitle = ({ movie }) => {
  const displayMovie = movie?.movies.results[0];
  return (
    <div
      className=" border border-black w-1/2 h-3/4 flex justify-center flex-col pl-10 
    "
    >
      <div className="">
        <p className="text-6xl">{displayMovie?.original_title}</p>
        <p className="text-sm w-3/4 my-6">{displayMovie?.overview}</p>
      </div>

      <div className=" ">
        <button className="border border-black py-3 px-5 ">Play</button>
        <button className="border border-black py-3 px-5 ml-2">
          More info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
