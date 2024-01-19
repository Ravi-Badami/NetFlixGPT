const HeroMovie = () => {
  return (
    <div className=' md:h-full'>
      <div className='flex  md:h-full flex-col md:flex-row items-center'>
        <div className='left  md:w-[30%] md:h-[80%]'>
          <div className='  h-full w-full flex justify-center '>
            <img
              src='https://media.themoviedb.org/t/p/w300_and_h450_bestv2/9GBhzXMFjgcZ3FdR9w3bUMMTps5.jpg'
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
                The Marvels <span className='font-medium'>(2023)</span>
              </p>
            </div>

            {/** Date */}
            <div className='flex gap-1 md:gap-3 '>
              <div className='flex gap-1 md:flex-row flex-col'>
                <span className='bg-gray-100 p-2 rounded-lg'>11/10/2023</span>
                <span className='bg-gray-100 p-2 rounded-lg'>1h 45m</span>
              </div>
              <span className='bg-gray-100 p-2 rounded-lg'>science fiction,adventure,Action</span>
            </div>

            {/** rating,playvideo */}
            <div className='flex items-center gap-10 mt-4'>
              <div className='flex items-center gap-2'>
                <p className='h-16 w-16 rounded-full bg-gray-300 flex items-center justify-center text-3xl'>
                  64
                </p>
                <span className='font-medium text-sm'>
                  User
                  <br />
                  Score
                </span>
              </div>
              <span className='flex items-end'>
                <img src='https://www.svgrepo.com/show/513408/star.svg' className='h-10' alt='' />
                <p>800</p>
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
            <div className='mt-4'>Higher,future,faster,together</div>

            {/** overview */}
            <div className=''>
              <p className='text-3xl font-bold'>Overview</p>
              <p className='w-[90%]'>
                Carol Danvers, aka Captain Marvel, has reclaimed her identity from the tyrannical
                Kree and taken revenge on the Supreme Intelligence. But unintended consequences see
                Carol shouldering the burden of a destabilized universe. When her duties send her to
                an anomalous wormhole linked to a Kree revolutionary, her powers become entangled
                with that of Jersey City super-fan Kamala Khan, aka Ms. Marvel, and Carol’s
                estranged niece, now S.A.B.E.R. astronaut Captain Monica Rambeau. Together, this
                unlikely trio must team up and learn to work in concert to save the universe.
              </p>
            </div>

            {/** crew */}
            <div className='mt-4 flex  w-[70%] justify-between'>
              <span>
                <p className='font-extrabold text-xl'>Ravi</p>
                <p>Director</p>
              </span>
              <span>
                <p className='font-extrabold text-xl'>Ravi</p>
                <p>Director</p>
              </span>
              <span>
                <p className='font-extrabold text-xl'>Ravi</p>
                <p>Director</p>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroMovie;
