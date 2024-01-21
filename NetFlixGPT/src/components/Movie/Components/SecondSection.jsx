import LeftSection from './Left/LeftSection';
import RightSection from './Right/RightSection';

const SecondSection = ({
  castAndCrewDetails,
  recommendation,
  status,
  revenue,
  original_language,
  budget,
}) => {
  if (!castAndCrewDetails || !recommendation)
    return <div className='h-screen w-screen bg-red-500'>loading</div>;

  const { cast } = castAndCrewDetails;
  const { results } = recommendation;

  return (
    <div className='h-screen  p-5 mt-16 md:mt-0 '>
      <div className='h-full'>
        <div className='flex h-full w-full flex-col-reverse md:flex-row'>
          <LeftSection cast={cast} results={results} recommendation={recommendation} />
          <RightSection
            status={status}
            original_language={original_language}
            revenue={revenue}
            budget={budget}
          />
        </div>
      </div>
    </div>
  );
};

export default SecondSection;
