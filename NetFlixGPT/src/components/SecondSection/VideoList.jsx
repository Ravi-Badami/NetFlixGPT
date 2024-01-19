import { Link } from 'react-router-dom';
import VideoCard from './VideoCard';
import { useDispatch } from 'react-redux';
import { toggleGpt, toggleSeachFalse } from '../../utils/redux/gptSlice';

const VideoList = ({ title, movie }) => {
  const dispatch = useDispatch();
  // console.log(movie);

  const handleClick = () => {
    dispatch(toggleSeachFalse());
    // dispatch(toggleGpt(true));
  };

  return (
    <div className=' '>
      <h1 className=' md:text-md text-white '>{title}</h1>
      <div className='flex   py-2 overflow-x-scroll hide-scrollbar'>
        <div className='flex  '>
          {movie?.movies?.results.map((m) => (
            <Link key={m?.id} to={'/movie/' + m.id} onClick={handleClick}>
              <VideoCard thumbnail={m?.poster_path} />
            </Link>
          )) ||
            movie?.map((m) => (
              <Link key={m?.id} to={'/movie/' + m.id} onClick={handleClick}>
                <VideoCard thumbnail={m?.poster_path} />
              </Link>
            ))}
        </div>
      </div>
    </div>
  );
};

export default VideoList;
