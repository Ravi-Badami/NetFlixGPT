import useCrewData from '../../../hooks/useCrewData';

/* eslint-disable react/prop-types */
const HeroMovie = ({
  title,
  tagline,
  vote_count,
  vote_average,
  release_date,
  hour,
  min,
  genres,
  overview,
  poster_path,
  castAndCrewDetails,
}) => {
  if (!castAndCrewDetails) return;
  const { crew } = castAndCrewDetails;

  const crewData = useCrewData(crew);
  if (!release_date) return;
  const date = release_date.split('-');
  return (
    <div className=' md:h-full'>
      <div className='flex  md:h-full flex-col md:flex-row items-center'>
        <div className='left  md:w-[30%] md:h-[80%]'>
          <div className='  h-full w-full flex justify-center '>
            <img
              src={'https://media.themoviedb.org/t/p/w300_and_h450_bestv2' + poster_path}
              alt=''
              className='rounded-lg  mt-5 md:mt-0'
            />
          </div>
        </div>

        <div className='h-full md:p-0 p-4 md:w-[70%] flex items-end'>
          <div className='right  w-full flex flex-col gap-2  h-[85%]'>
            {/** title */}
            <div className=''>
              <p className='text-3xl font-extrabold  flex justify-center md:block'>
                {title} <span className='font-medium'>({date[0]})</span>
              </p>
            </div>

            {/** Date */}
            <div className='flex gap-1 md:gap-3 '>
              <div className='flex gap-1 md:flex-row flex-col'>
                <span className='bg-gray-100 p-2 rounded-lg'>
                  {date[2] + '/' + date[1] + '/' + date[0]}
                </span>
                <span className='bg-gray-100 p-2 rounded-lg'>{hour + 'h ' + min + 'm'}</span>
              </div>
              <span className='bg-gray-100 p-2 rounded-lg'>
                {' '}
                {genres.map((genre) => genre.name).join(',')}
              </span>
            </div>

            {/** rating,playvideo */}
            <div className='flex items-center gap-10 mt-4'>
              <div className='flex items-center gap-2'>
                <p className='h-16 w-16 rounded-full bg-gray-300 flex items-center justify-center text-2xl'>
                  {vote_average.toFixed(0)} <span className='text-sm'>%</span>
                </p>
                <span className='font-medium text-sm'>
                  User
                  <br />
                  Score
                </span>
              </div>
              <span className='flex items-end'>
                <img src='https://www.svgrepo.com/show/513408/star.svg' className='h-10' alt='' />
                <p>{vote_count}</p>
              </span>
              <span className='flex items-center'>
                <img
                  src='https://www.svgrepo.com/show/393204/triangle-right-filled.svg'
                  className='h-10'
                  alt=''
                />
                <p>Play Trailer</p>
              </span>
            </div>

            {/** tagline */}
            <div className='mt-4'>{tagline}</div>

            {/** overview */}
            <div className=''>
              <p className='text-3xl font-bold'>Overview</p>
              <p className='w-[90%]'>{overview}</p>
            </div>

            {/** crew */}
            <div className='mt-4 flex  w-[70%] justify-between'>
              <span>
                <p className='font-bold text-lg'>{crewData[0]}</p>
                <p>Editing</p>
              </span>
              <span>
                <p className='font-bold text-lg'>{crewData[1]}</p>
                <p>Writing</p>
              </span>
              <span>
                <p className='font-bold text-lg'>{crewData[2]}</p>
                <p>Directing</p>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroMovie;
