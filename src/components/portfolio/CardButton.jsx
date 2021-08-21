import React from 'react';

const CardButton = (props) => {
  return (
    <div>
      <button
        className="text-xs xs:text-sm md:text-lg xl:text-sm px-1.5 xs:px-2.5 md:px-6 py-1.5 md:py-2.5 transition-all duration-700 ease-in-out border-text_head border-2  hover:bg-text_head absolute   -top-96 group-hover:top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
        onClick={props.showOverlay}
      >
        LEARN MORE
      </button>
    </div>
  );
};

export default CardButton;
