import React from "react";
import { TMDB_POSTER_URL } from "../../utils/constants";

const VideoCard = ({ thumbnail }) => {
  return (
    <div className="">
      <div className="p-4 ">
        <div className="w-36">
          <img
            className=" h-56 "
            src={TMDB_POSTER_URL + thumbnail}
            alt="thumbnail"
          />
        </div>
      </div>
    </div>
  );
};

export default VideoCard;
