import Shimmer from '../../Shimmer/Shimmer';

const SearchSugesstionShimmer = () => {
  const movie = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  return (
    <div>
      <div className=' bg-black  text-black'>
        <div className='p-10'></div>
        <div className=' '>
          <h1 className=' md:text-md text-white '>
            {' '}
            <Shimmer h='30' w='200' />
          </h1>
          <div className='flex   py-2 overflow-x-scroll hide-scrollbar'>
            <div className='flex  gap-5'>
              {movie?.map((m) => (
                <div key={m} className='flex flex-col gap-10'>
                  <Shimmer h='200' w='200' mh='10' mw='20' />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchSugesstionShimmer;
