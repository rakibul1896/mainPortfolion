import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';


const CardImage = (props) => {
  
  return (
    <div>
      <LazyLoadImage
        src={props.thumbnail}
        effect="blur"
        alt="A website."
        className="w-full transition duration-500 ease-in-out group-hover:opacity-0 cursor-pointer"
        
      />
    </div>
  );
};

export default CardImage;
