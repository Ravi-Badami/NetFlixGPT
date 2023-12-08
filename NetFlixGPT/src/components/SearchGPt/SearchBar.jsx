import { useSelector } from "react-redux";
import language from "../../utils/language";

const SearchBar = () => {
  const lang = useSelector((store) => store.config.language);
  return (
    <div className=" mt-24">
      <form action="" onSubmit={(e) => e.preventDefault()}>
        <input
          type="text"
          className=" px-5 pr-32 py-1 rounded-md h-12 outline-none "
          placeholder={language[lang].placeHolder}
        />
        <button className="ml-2  py-1 px-4 font-bold bg-red-700 text-white rounded-md h-12">
          {language[lang].search}
        </button>
      </form>
    </div>
  );
};

export default SearchBar;
