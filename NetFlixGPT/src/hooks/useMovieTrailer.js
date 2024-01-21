import { useEffect } from 'react';
import { API_OPTIONS } from '../utils/constants';
import { addId } from '../utils/redux/moviesSlice';
import { useDispatch } from 'react-redux';

const useMovieTrailer = (movieId) => {
  const dispatch = useDispatch();
  // if (!movieId) return;

  useEffect(() => {
    bgVideo();
  }, []);
  const bgVideo = async () => {
    const video = await fetch(
      'https://api.themoviedb.org/3/movie/' + movieId + '/videos?language=en-US',
      API_OPTIONS
    );

    if (video) {
      const json = await video.json();

      const trailerId = await json?.results?.filter((v) => v?.type === 'Trailer');

      const trailerIdKey = trailerId[0].key;

      if (trailerId !== '')
        dispatch(
          addId({
            id: trailerIdKey,
          })
        );
    }
  };
};
export default useMovieTrailer;
