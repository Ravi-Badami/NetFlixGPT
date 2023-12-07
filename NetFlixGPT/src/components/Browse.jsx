import { useSelector } from "react-redux";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";

import SecondSection from "./Hero/SecondSection";
import VideoTitle from "./Hero/VideoTitle";
import VideoContainer from "./Hero/VideoContainer";

const Browse = () => {
  useNowPlayingMovies();
  const movie = useSelector((store) => store?.movies?.nowPlayingMovies);
  // console.log(movie);
  if (!movie) return;
  return (
    <div>
      <div className=" h-screen font-bold flex justify-center items-start flex-col overflow-hidden">
        <VideoContainer movieId={movie} />
        <div className="absolute h-screen ">
          <VideoTitle movie={movie} />
          {/* <SecondSection /> */}
        </div>
      </div>
    </div>
  );
};

export default Browse;
