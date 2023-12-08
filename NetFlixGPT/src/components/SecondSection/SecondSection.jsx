import VideoList from "./VideoList";

const SecondSection = ({ movie }) => {
  // console.log(movie);
  return (
    <div className=" text-white w-[84.45rem]  ">
      <VideoList movie={movie?.nowPlayingMovies} title={"Now playing"} />
      <VideoList movie={movie?.popularMovies} title={"Popular"} />
      <VideoList movie={movie?.topRatedMovies} title={"Top Rated"} />
      <VideoList movie={movie?.upComingMovies} title={"Up Coming"} />
    </div>
  );
};

export default SecondSection;
