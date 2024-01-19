import { useEffect } from 'react';
import { API_OPTIONS } from '../../utils/constants';
import { useParams } from 'react-router-dom';
import useMovieDetails from '../../hooks/useMovieDetails';
import HeroMovie from './Components/HeroMovie';
import SecondSection from './Components/SecondSection';

const Movie = () => {
  const { movieId } = useParams();
  const id = movieId;
  console.log(id);
  const movieDetails = useMovieDetails(id);
  console.log(movieDetails);

  return (
    <div className='h-screen flex w-screen items-end bg-gradient-to-r from-black '>
      <div className='h-[85%]  w-full bg-white'>
        <HeroMovie />
        <SecondSection />
      </div>
    </div>
  );
};

export default Movie;
