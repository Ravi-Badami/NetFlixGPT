import { useSelector } from "react-redux";
import language from "../../utils/language";
import { useRef } from "react";
import openai from "../../utils/openAI";

const SearchBar = () => {
  const lang = useSelector((store) => store.config.language);
  const result = useRef(null);

  const handleSearchOpenAi = async () => {
    const gptQuery =
      "Act as a movie recommendation system and suggest some movies for the query" +
      result.current.value +
      "only names of 5 movies , comma separated like the example result given .Example Result:Gadar,Sholay,Don,Golmal,Koi Mil Gaya";
    console.log(result?.current.value);
    try {
      const gptResults = await openai.chat.completions.create({
        messages: [{ role: "user", content: gptQuery }],
        model: "gpt-3.5-turbo",
      });
      // console.log(gptResults?.choices);

      // console.log(gptResults?.choices[0].message.content);
    } catch (error) {
      console.log(error);
    }
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
          onClick={handleSearchOpenAi}
        >
          {language[lang].search}
        </button>
      </form>
    </div>
  );
};

export default SearchBar;
