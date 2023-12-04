import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addMovies } from "../utils/redux/moviesSlice";

const Browse = () => {
  const dispatch = useDispatch();
  const movies = useSelector((store) => store?.movies);
  console.log(movies?.movies?.results);

  const getMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/now_playing?page=1",
      API_OPTIONS
    );

    const json = await data.json();
    dispatch(
      addMovies({
        movies: json,
      })
    );
  };
  useEffect(() => {
    getMovies();
  }, []);
  return (
    <div>
      <div className=" h-screen font-bold flex justify-center items-center">
        <button className="border border-black p-2">signout</button>
      </div>
    </div>
  );
};

export default Browse;
