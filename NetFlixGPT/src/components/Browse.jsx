import { useSelector } from "react-redux";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import MainSection from "./Hero/MainSection";
import SecondSection from "./Hero/SecondSection";
import VideoTitle from "./Hero/VideoTitle";

const Browse = () => {
  useNowPlayingMovies();
  const movie = useSelector((store) => store?.movies);
  if (!movie) return;
  return (
    <div>
      <div className=" h-screen font-bold flex justify-center items-start flex-col overflow-hidden">
        <MainSection movieId={movie} />
        <div className="absolute h-screen ">
          {/* <VideoTitle movie={movie} /> */}
          {/* <SecondSection /> */}
        </div>
      </div>
    </div>
  );
};

export default Browse;
