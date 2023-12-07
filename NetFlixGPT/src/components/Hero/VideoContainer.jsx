import { useSelector } from "react-redux";
import useMovieTrailer from "../../hooks/useMovieTrailer";
import { useRef } from "react";

const VideoContainer = ({ movieId }) => {
  const result = useSelector((store) => store?.movies?.id?.id);
  useMovieTrailer(movieId);
  const iframeRef = useRef(null);

  return (
    <div className="h-screen w-[98.9vw]  -z-10">
      <iframe
        ref={iframeRef}
        className="w-screen aspect-video -mt-10"
        // src={
        //   "https://www.youtube.com/embed/" +
        //   result +
        //   "?autoplay=1&controls=0&mute=1"
        // }
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      ></iframe>
    </div>
  );
};

export default VideoContainer;
