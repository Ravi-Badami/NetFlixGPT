import { useSelector } from "react-redux";
import VideoList from "../SecondSection/VideoList";

const MovieSuggestion = () => {
  const result = useSelector((store) => store.gpt);
  const { getMovies, getMoviesNames } = result;
  if (getMoviesNames === null) return <div> </div>;

  return (
    <div className="border border-black mt-10 w-screen ">
      <div className=" bg-black p-10 w-[80%]">
        <div className="text-white">{getMoviesNames}</div>

        {getMoviesNames.map((movie, index) => (
          <VideoList key={movie} movie={getMovies[index]} title={movie} />
        ))}
      </div>
    </div>
  );
};

export default MovieSuggestion;
