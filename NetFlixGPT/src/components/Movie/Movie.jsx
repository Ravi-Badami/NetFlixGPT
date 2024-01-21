import { useEffect } from 'react';
import { API_OPTIONS } from '../../utils/constants';
import { useParams } from 'react-router-dom';
import useMovieDetails from '../../hooks/useMovieDetails';
import HeroMovie from './Components/HeroMovie';
import SecondSection from './Components/SecondSection';
import useTime from '../../hooks/useTime';
import useCastDetails from '../../hooks/useCastDetails';
import useRecommendation from '../../hooks/useRecommendation';

const Movie = () => {
  const { movieId } = useParams();
  // console.log(movieId);
  const castAndCrewDetails = useCastDetails(movieId);

  const id = movieId;

  const movieDetails = useMovieDetails(id);

  const recommendation = useRecommendation(id);
  if (!movieDetails) return console.log('loading');
  console.log('loaded');
  const {
    title,
    tagline,
    vote_count,
    vote_average,
    release_date,
    runtime,
    genres,
    overview,
    poster_path,
    status,
    revenue,
    original_language,
    budget,
  } = movieDetails;
  const { rhours, rmin } = useTime(runtime);

  return (
    <div className='h-screen flex w-screen items-end bg-gradient-to-r from-black '>
      <div className='h-[85%]  w-full bg-white'>
        <HeroMovie
          title={title}
          tagline={tagline}
          vote_count={vote_count}
          vote_average={vote_average * 10}
          release_date={release_date}
          hour={rhours}
          min={rmin}
          genres={genres}
          overview={overview}
          poster_path={poster_path}
          castAndCrewDetails={castAndCrewDetails}
        />
        <SecondSection
          castAndCrewDetails={castAndCrewDetails}
          recommendation={recommendation}
          status={status}
          revenue={revenue}
          original_language={original_language}
          budget={budget}
        />
      </div>
    </div>
  );
};

export default Movie;
