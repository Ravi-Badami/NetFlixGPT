import { useSelector } from "react-redux";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import VideoTitle from "./Hero/VideoTitle";
import VideoContainer from "./Hero/VideoContainer";
import SecondSection from "./SecondSection/SecondSection";
import usePopularMovies from "../hooks/usePopularMovies";
import useTopRated from "../hooks/useTopRated";
import useUpComing from "../hooks/useUpComing";

const Browse = () => {
  // useNowPlayingMovies();
  // usePopularMovies();
  // useTopRated();
  // useUpComing();
  const movie = useSelector((store) => store?.movies);
  // console.log(movie);
  if (!movie) return;
  return (
    <div>
      <div className=" h-screen font-bold flex justify-center items-start flex-col w-screen">
        <VideoContainer movieId={movie} />
        <div className=" absolute h-screen flex flex-col   ">
          <VideoTitle movie={movie} />
          <SecondSection movie={movie} />
        </div>
      </div>
    </div>
  );
};

export default Browse;
