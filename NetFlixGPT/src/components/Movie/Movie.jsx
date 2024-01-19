import { useEffect } from 'react';
import { API_OPTIONS } from '../../utils/constants';
import { useParams } from 'react-router-dom';
import useMovieDetails from '../../hooks/useMovieDetails';

const Movie = () => {
  const { movieId } = useParams();
  const id = movieId;
  console.log(id);
  const movieDetails = useMovieDetails(id);
  console.log(movieDetails);
  // console.log(useParams());

  return <div>Movie</div>;
};

export default Movie;
