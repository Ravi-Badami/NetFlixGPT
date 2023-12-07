import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "../../utils/constants";
import { useEffect, useState } from "react";
import { addId } from "../../utils/redux/moviesSlice";

const VideoContainer = ({ movieId }) => {
  const [heroVideo, setHeroVideo] = useState("");
  const dispatch = useDispatch();
  const result = useSelector((store) => store?.movies?.id?.id);
  console.log(result);

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

  console.log(heroVideo);

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
