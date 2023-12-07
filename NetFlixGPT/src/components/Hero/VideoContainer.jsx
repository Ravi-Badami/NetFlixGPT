import { useSelector } from "react-redux";
import useMovieTrailer from "../../hooks/useMovieTrailer";

const VideoContainer = ({ movieId }) => {
  const result = useSelector((store) => store?.movies?.id?.id);
  useMovieTrailer(movieId);
  // console.log(heroVideo);

  return (
    <div className="h-screen w-[98.9vw] border border-black">
      <iframe
        src={"https://www.youtube.com/embed/" + result}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      ></iframe>
    </div>
  );
};

export default VideoContainer;
