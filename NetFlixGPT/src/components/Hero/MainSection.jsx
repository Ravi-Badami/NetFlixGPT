import { useSelector } from "react-redux";
import VideoContainer from "./VideoContainer";

const MainSection = ({ movieId }) => {
  return (
    <div>
      <VideoContainer movieId={movieId} />
    </div>
  );
};

export default MainSection;
