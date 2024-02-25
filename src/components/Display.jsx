import React from "react";

const Display = ({ photos }) => {
  return (
    <div className='grid grid-cols-3 gap-4 w-[600px] mx-auto pb-20'>
      {photos.map((photo) => (
        <img
          className='object-cover'
          key={photo.id}
          src={photo.src.large}
          alt={photo.title}
        />
      ))}
    </div>
  );
};

export default Display;
