import { useSelector } from 'react-redux';
import useMovieTrailer from '../../hooks/useMovieTrailer';

const VideoContainer = ({ movieId }) => {
  const id = movieId?.nowPlayingMovies?.movies?.results[0]?.id;
  if (id === undefined) return;

  if (id !== undefined) {
    useMovieTrailer(id);
  }
  const result = useSelector((store) => store?.movies?.id?.id);

  return (
    <div className=' w-screen  -z-10 border border-white '>
      {/* <iframe
        className='w-[100%] h-screen  '
        src={'https://www.youtube.com/embed/' + result + '?autoplay=1&controls=0&mute=1'}
        title='YouTube video player'
        allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'></iframe> */}
    </div>
  );
};

export default VideoContainer;
