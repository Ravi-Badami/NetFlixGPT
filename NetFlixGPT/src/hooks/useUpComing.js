import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addUpcomingMovies } from "../utils/redux/moviesSlice";
import { useEffect } from "react";

const useUpComing = () => {
  const dispatch = useDispatch();
  const upComing = useSelector((store) => store.movies.nowPlayingMovies);

  const getUpComingMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/upcoming?page=1",
      API_OPTIONS
    );

    const json = await data.json();
    dispatch(
      addUpcomingMovies({
        movies: json,
      })
    );
  };
  useEffect(() => {
    /** This is memoisation */

    !upComing && getUpComingMovies();
  }, []);
};

export default useUpComing;
