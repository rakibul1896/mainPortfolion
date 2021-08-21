import React from 'react';
import OverlayCarousel from './OverlayCarousel';
import OverlayText from './OverlayText';
import X from './X';

const Overlay = (props) => {
  return (
    <div
      className=" transition-all duration-500 ease-in-out"
      style={{ display: props.none, opacity: props.opacity }}
    >
      <div className="bg-gray-light fixed h-screen top-0 bottom-0 left-0 right-0 overflow-y-scroll overflow-x-hidden z-50 overscroll-y-contain scrollbar-thin scrollbar-thumb-text_head">
        <div className="relative">
          <div className="w-1 h-1 bg-gray-light"></div>
          <div className="my-16 bg-white text-center w-11/12 md:w-80% mx-auto rounded-2xl shadow-xl overflow-hidden">
            <OverlayCarousel images={props.images} />
            <OverlayText header={props.header} para={props.para} link={props.link}/>
          </div>

          <X hideOverlay={props.hideOverlay} />
        </div>
      </div>
    </div>
  );
};

export default Overlay;
