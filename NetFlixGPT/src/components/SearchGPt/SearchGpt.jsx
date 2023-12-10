import { BG_IMAGE } from "../../utils/constants";
import MovieSuggestion from "./MovieSuggestion";
import SearchBar from "./SearchBar";

const SearchGpt = () => {
  return (
    <div className="absolute flex flex-col w-screen ">
      <img src={BG_IMAGE} alt="" className="-z-10 absolute w-screen h-screen" />
      <SearchBar />
      <MovieSuggestion />
    </div>
  );
};

export default SearchGpt;
