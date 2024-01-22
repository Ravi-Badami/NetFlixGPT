const RightSection = ({ status, revenue, original_language, budget }) => {
  return (
    <div className='right md:w-[25%] h-full  md:mt-0 '>
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
          <a href='https://github.com/Ravi-Badami/NetFlixGPT'>
            <p>
              <img src='https://www.svgrepo.com/show/439171/github.svg' className='h-10' alt='' />
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
            <p>
              {revenue.toLocaleString('en-US', {
                style: 'currency',
                currency: 'USD',
              })}
            </p>
          </span>
          <span>
            <p className='font-bold'> Budget</p>
            <p>
              {budget.toLocaleString('en-US', {
                style: 'currency',
                currency: 'USD',
              })}
            </p>
          </span>
        </div>
      </div>
    </div>
  );
};

export default RightSection;
