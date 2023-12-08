import { useSelector } from "react-redux";
import useMovieTrailer from "../../hooks/useMovieTrailer";

const VideoContainer = ({ movieId }) => {
  const id = movieId?.nowPlayingMovies?.movies?.results[0]?.id;
  if (id === undefined) return;
  console.log(id);
  if (id !== undefined) {
    useMovieTrailer(id);
  }
  const result = useSelector((store) => store?.movies?.id?.id);
  console.log(result);

  return (
    <div className=" w-screen  -z-10 border border-white ">
      <iframe
        className="w-[100%] h-screen border border-white "
        src={
          "https://www.youtube.com/embed/" +
          result +
          "?autoplay=1&controls=0&mute=1"
        }
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      ></iframe>
    </div>
  );
};

export default VideoContainer;
