import React from 'react';
import ImageComponent from './ImageComponent';

const SecondSection = ({
  castAndCrewDetails,
  recommendation,
  status,
  revenue,
  original_language,
  budget,
}) => {
  console.log(recommendation);
  if (!castAndCrewDetails || !recommendation) return;

  const { cast } = castAndCrewDetails;
  const { results } = recommendation;
  console.log(cast);
  return (
    <div className='h-screen  p-5 mt-16 md:mt-0 '>
      <div className='h-full'>
        <div className='flex h-full w-full flex-col-reverse md:flex-row'>
          <div className='left md:w-[75%] h-full mt-5 md:mt-0 '>
            <div className='md:p-5 flex flex-col  gap-5 md:gap-16'>
              <div className=''>
                <p className='text-3xl font-extrabold '>Top Billed Cast</p>
                <div className='flex  overflow-x-scroll hide-scrollbar mt-5'>
                  <div className='flex gap-5  '>
                    {cast.map((card) => (
                      <div key={card.id} className='text-center'>
                        {card.profile_path !== null && (
                          <ImageComponent imageId={card.profile_path} h={52} w={36} />
                        )}
                        {card.profile_path !== null && <p className='font-medium'> {card.name}</p>}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              {recommendation.total_results > 0 && (
                <div className='text-3xl font-extrabold'>
                  <p>Recommendations</p>
                  <div className=''>
                    <div className='flex  overflow-x-scroll hide-scrollbar mt-5'>
                      <div className='flex gap-5  '>
                        {results.map((card) => (
                          <div key={card.id} className='text-center'>
                            {card.poster_path !== null && (
                              <ImageComponent imageId={card.poster_path} h={24} w={36} />
                            )}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
          <div className='right md:w-[25%] h-full  md:mt-0'>
            <div className='  md:p-5'>
              <div className='Social media flex   gap-5 '>
                <a href='https://twitter.com/RaviBadamipvt'>
                  <p className=''>
                    <img
                      src='https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/x-social-media-logo-icon.png'
                      className='h-10'
                      alt=''
                    />
                  </p>
                </a>
                <a href='https://www.linkedin.com/in/ravikumar-badami-8bb012202/'>
                  <p>
                    <img
                      src='https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/linkedin-app-icon.png'
                      className='h-10'
                      alt=''
                    />
                  </p>
                </a>
                <a href='https://github.com/Ravi-Badami'>
                  <p>
                    <img
                      src='https://www.svgrepo.com/show/439171/github.svg'
                      className='h-10'
                      alt=''
                    />
                  </p>
                </a>
              </div>
              <div className='Details bg-red-00 pt-5 md:pt-10 flex flex-col gap-5'>
                <span>
                  <p className='font-bold'>Status</p>
                  <p>{status}</p>
                </span>
                <span>
                  <p className='font-bold'>Original Language</p>
                  <p>{original_language}</p>
                </span>
                <span>
                  <p className='font-bold'>Revenue</p>
                  <p> {revenue}</p>
                </span>
                <span>
                  <p className='font-bold'> Budget</p>
                  <p>{budget}</p>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SecondSection;
