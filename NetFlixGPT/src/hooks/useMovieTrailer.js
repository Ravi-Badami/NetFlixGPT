import { useEffect } from 'react';
import { API_OPTIONS } from '../utils/constants';
import { addId } from '../utils/redux/moviesSlice';
import { useDispatch } from 'react-redux';

const useMovieTrailer = (movieId) => {
  const dispatch = useDispatch();
  // if (!movieId) return;
  // console.log(id);
  useEffect(() => {
    bgVideo();
  }, []);
  const bgVideo = async () => {
    const video = await fetch(
      'https://api.themoviedb.org/3/movie/' + movieId + '/videos?language=en-US',
      API_OPTIONS
    );
    // console.log(video);
    if (video) {
      const json = await video.json();
      console.log(json);

      const trailerId = await json?.results?.filter((v) => v?.type === 'Trailer');
      // console.log(trailerId);

      const trailerIdKey = trailerId[0].key;
      // console.log(trailerIdKey);

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
