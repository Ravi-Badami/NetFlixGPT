import VideoCard from "./VideoCard";

const VideoList = ({ title, movie }) => {
  // console.log(title, movie);

  return (
    <div className=" ">
      <h1 className=" md:text-md text-white ">{title}</h1>
      <div className="flex   py-2 overflow-x-scroll hide-scrollbar">
        <div className="flex  ">
          {movie?.movies?.results.map((m) => (
            <VideoCard key={m?.id} thumbnail={m?.poster_path} />
          )) ||
            movie?.map((m) => (
              <VideoCard key={m?.id} thumbnail={m?.poster_path} />
            ))}
        </div>
      </div>
    </div>
  );
};

export default VideoList;
