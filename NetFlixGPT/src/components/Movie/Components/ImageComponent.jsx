import React from 'react';

const ImageComponent = ({ imageId, h, w }) => {
  if (imageId === null) return;

  return (
    <div className={`h-${h} w-${w} bg-gray-400`}>
      {imageId && (
        <img
          src={'https://media.themoviedb.org/t/p/w300_and_h450_bestv2' + imageId}
          alt=''
          className={`  object-cover`}
        />
      )}
    </div>
  );
};

export default ImageComponent;
