import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";
import { addId } from "../utils/redux/moviesSlice";
import { useDispatch } from "react-redux";

const useMovieTrailer = (movieId) => {
  const dispatch = useDispatch();
  // console.log(result);

  useEffect(() => {
    bgVideo();
  }, []);
  const id = movieId?.movies?.results[0]?.id;
  const bgVideo = async () => {
    const video = await fetch(
      "https://api.themoviedb.org/3/movie/" + id + "/videos?language=en-US",
      API_OPTIONS
    );
    const json = await video.json();
    const trailerId = await json?.results?.filter((v) => v?.type === "Trailer");
    const trailerIdKey = trailerId[0].key;
    if (trailerId !== "")
      dispatch(
        addId({
          id: trailerIdKey,
        })
      );
  };
};
export default useMovieTrailer;
