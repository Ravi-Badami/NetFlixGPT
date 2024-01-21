import { Link } from 'react-router-dom';

const VideoTitle = ({ movie }) => {
  const displayMovie = movie?.nowPlayingMovies?.movies?.results[0];
  if (!displayMovie) return;
  return (
    <div
      className='  h-4/4 flex  flex-col pl-12 py-52 select-none bg-gradient-to-r from-black 
     
    '>
      <div className=''>
        <div className='w-1/2 mb-5 md:mb-0'>
          <p className='text-4xl md:text-6xl text-white '>{displayMovie?.original_title}</p>
          <p className=' hidden md:block text-xs md:text-sm w-1/3 md:w-3/4 my-6 text-white'>
            {displayMovie?.overview}
          </p>
        </div>

        <div className=''>
          <button className='border border-white py-2 px-3 text-sm md:py-3 md:px-5 bg-white text-black rounded-md'>
            ▶️ Play
          </button>
          <Link to={'/movie/' + displayMovie.id}>
            <button className=' py-3 px-3 text-sm md:py-3 md:px-5 ml-2 text-white rounded-md bg-gray-500 bg-opacity-30'>
              <span className='border border-white rounded-full px-2 text-center mr-1'>ℹ️</span>
              More info
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default VideoTitle;
