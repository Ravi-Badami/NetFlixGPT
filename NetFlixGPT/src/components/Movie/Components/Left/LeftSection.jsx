import { Link } from 'react-router-dom';
import ImageComponent from '../ImageComponent';

const LeftSection = ({ cast, recommendation, results }) => {
  return (
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
                    <Link key={card.id} to={'/movie/' + card.id}>
                      <div className='text-center'>
                        {card.poster_path !== null && (
                          <ImageComponent imageId={card.poster_path} h={20} w={36} />
                        )}
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default LeftSection;
