import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addMovies } from "../utils/redux/moviesSlice";
import { useEffect } from "react";

const useNowPlayingMovies = () => {
  const dispatch = useDispatch();
  const nowPlayingMovies = useSelector(
    (store) => store.movies.nowPlayingMovies
  );

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
    /** This is memoisation */
    !nowPlayingMovies && getMovies();
  }, []);
};

export default useNowPlayingMovies;
