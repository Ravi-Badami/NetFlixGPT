import { useSelector } from 'react-redux';
import useNowPlayingMovies from '../hooks/useNowPlayingMovies';
import VideoTitle from './Hero/VideoTitle';
import VideoContainer from './Hero/VideoContainer';
import SecondSection from './SecondSection/SecondSection';
import usePopularMovies from '../hooks/usePopularMovies';
import useTopRated from '../hooks/useTopRated';
import useUpComing from '../hooks/useUpComing';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Browse = () => {
  useNowPlayingMovies();
  usePopularMovies();
  useTopRated();
  useUpComing();
  const movie = useSelector((store) => store?.movies);
  const navigate = useNavigate();

  useEffect(() => {
    const handlePopState = () => {
      // This function will be called when the user clicks the browser's back button
      // You can add your custom logic for handling the back button here
      navigate('/browse');
    };

    // Add the event listener for the popstate event
    window.addEventListener('popstate', handlePopState);

    // Cleanup the event listener when the component is unmounted
    return () => {
      window.removeEventListener('popstate', handlePopState);
    };
  }, []);
  if (!movie) return;
  return (
    <div className='relative'>
      <div className=' h-screen font-bold flex justify-center items-start flex-col w-screen'>
        <VideoContainer movieId={movie} />
        <div className=' absolute h-screen flex flex-col   '>
          <VideoTitle movie={movie} />
          <SecondSection movie={movie} />
        </div>
      </div>
    </div>
  );
};

export default Browse;
