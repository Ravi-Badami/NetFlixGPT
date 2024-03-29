import VideoList from './VideoList';

const SecondSection = ({ movie }) => {
  return (
    <div className=' text-white w-[84.45rem] bg-black '>
      <div className=' relative -mt-44  pl-10  '>
        <VideoList movie={movie?.nowPlayingMovies} title={'Now playing'} />
        <VideoList movie={movie?.popularMovies} title={'Popular'} />
        <VideoList movie={movie?.topRatedMovies} title={'Top Rated'} />
        <VideoList movie={movie?.upComingMovies} title={'Up Coming'} />
      </div>
    </div>
  );
};

export default SecondSection;
