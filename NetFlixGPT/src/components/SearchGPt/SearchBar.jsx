import { useDispatch, useSelector } from 'react-redux';
import language from '../../utils/language';
import { useRef } from 'react';

import useGptMovie from '../../hooks/useGptMovie';
import { addMovieDetails } from '../../utils/redux/gptSlice';

const SearchBar = () => {
  const dispatch = useDispatch();
  const lang = useSelector((store) => store.config.language);
  const result = useRef(null);
  const { handleSearchOpenAi } = useGptMovie();

  const handleSearchOpenAiThis = () => {
    dispatch(
      addMovieDetails({
        movieNames: null,
        moviesResults: null,
      })
    );
    handleSearchOpenAi(result);
  };

  return (
    <div className=' mt-36 md:mt-24 w-screen  text-center   '>
      <form action='' className='w-screen' onSubmit={(e) => e.preventDefault()}>
        <input
          ref={result}
          type='text'
          className=' px-5 py-1 rounded-md h-12 outline-none  border-2 border-red-200 '
          placeholder={language[lang].placeHolder}
        />
        <button
          className='mt-4 md:mt-0 ml-2  py-1 px-4 font-bold bg-red-700 text-white rounded-md h-12'
          onClick={handleSearchOpenAiThis}>
          {language[lang].search}
        </button>
      </form>
    </div>
  );
};

export default SearchBar;
