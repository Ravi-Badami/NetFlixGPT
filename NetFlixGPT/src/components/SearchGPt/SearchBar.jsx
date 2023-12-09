import { useDispatch, useSelector } from "react-redux";
import language from "../../utils/language";
import { useRef } from "react";
import openai from "../../utils/openAI";
import { API_OPTIONS } from "../../utils/constants";
import { addMovieDetails } from "../../utils/redux/gptSlice";
import useGptMovie from "../../hooks/useGptMovie";

const SearchBar = () => {
  const lang = useSelector((store) => store.config.language);
  const result = useRef(null);
  const { handleSearchOpenAi } = useGptMovie();

  const handleSearchOpenAiThis = () => {
    handleSearchOpenAi(result);
  };

  return (
    <div className=" mt-24">
      <form action="" onSubmit={(e) => e.preventDefault()}>
        <input
          ref={result}
          type="text"
          className=" px-5 pr-32 py-1 rounded-md h-12 outline-none "
          placeholder={language[lang].placeHolder}
        />
        <button
          className="ml-2  py-1 px-4 font-bold bg-red-700 text-white rounded-md h-12"
          onClick={handleSearchOpenAiThis}
        >
          {language[lang].search}
        </button>
      </form>
    </div>
  );
};

export default SearchBar;
