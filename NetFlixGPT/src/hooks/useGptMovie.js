import { useDispatch } from 'react-redux';
import { API_OPTIONS } from '../utils/constants';
import openai from '../utils/openAI';
import { addMovieDetails } from '../utils/redux/gptSlice';

const useGptMovie = () => {
  const dispatch = useDispatch();
  const searchGptMovies = async (movie) => {
    const data = await fetch(
      'https://api.themoviedb.org/3/search/movie?query=' +
        movie +
        '&include_adult=false&language=en-US&page=1',
      API_OPTIONS
    );
    const json = await data.json();
    return json.results;
  };

  const handleSearchOpenAi = async (result) => {
    if (result === null) return;

    const gptQuery =
      'Act as a movie recommendation system and suggest some movies for the query' +
      result.current.value +
      'only names of 5 movies , comma separated like the example result given .Example Result:Gadar,Sholay,Don,Golmal,Koi Mil Gaya';
    console.log(result?.current.value);
    try {
      const gptResults = await openai.chat.completions.create({
        messages: [{ role: 'user', content: gptQuery }],
        model: 'gpt-3.5-turbo',
      });

      console.log(gptResults);

      console.log(gptResults?.choices[0].message.content);
      const getMovies = gptResults?.choices[0].message.content.split(',');

      /* It will return the promise because  Instead of blocking the execution of your program and waiting for the asynchronous task to complete, searchGptMovies returns a promise immediately. This promise is in a pending state until the asynchronous operation is finished.*/
      const moviePromise = getMovies.map((m) => searchGptMovies(m));

      /** The above promise is completed here */
      const finalResult = await Promise.all(moviePromise);
      console.log(finalResult);
      dispatch(
        addMovieDetails({
          movieNames: getMovies,
          moviesResults: finalResult,
        })
      );
    } catch (error) {
      console.log(error);
    }
  };
  return { handleSearchOpenAi };
};
export default useGptMovie;
