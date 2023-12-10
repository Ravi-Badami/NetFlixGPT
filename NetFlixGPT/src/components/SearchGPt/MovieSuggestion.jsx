import { useSelector } from "react-redux";
import VideoList from "../SecondSection/VideoList";

const MovieSuggestion = () => {
  const result = useSelector((store) => store.gpt);
  const { getMovies, getMoviesNames } = result;
  if (getMoviesNames === null) return <div> </div>;

  return (
    // TODO: Shimmer UI
    // TODO: On click to the image of a movie it should show the trailer ,details ,description etc
    <div className="border border-black mt-10 w-screen flex items-center ">
      <div className=" bg-black p-10 w-[80%]">
        <div className="text-white mb-10 border-b pb-5 border-white">
          {"Movies = " + getMoviesNames + ", "}
        </div>

        {getMoviesNames.map((movie, index) => (
          <VideoList key={movie} movie={getMovies[index]} title={movie} />
        ))}
      </div>
    </div>
  );
};

export default MovieSuggestion;
