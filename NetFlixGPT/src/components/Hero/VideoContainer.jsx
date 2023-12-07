import { API_OPTIONS } from "../../utils/constants";
import { useEffect, useState } from "react";
const VideoContainer = ({ movieId }) => {
  const [heroVideo, setHeroVideo] = useState("");

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
    if (trailerId !== "") setHeroVideo(trailerId);
  };

  console.log(heroVideo);

  return (
    <div className="h-screen w-[98.9vw] border border-black">
      <iframe
        width="560"
        height="315"
        src={"https://www.youtube.com/embed/" + heroVideo[0]?.key}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default VideoContainer;
