import React from 'react';
import {animateScroll as scroll} from 'react-scroll'
import { Button } from '../Elements';


const FooterBtn = () => {
  const toTop = ()=> {
    scroll.scrollToTop();
  }
  return (
    <div className="bg-text_head_dark hover:bg-text_head  absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 " 
    onClick={toTop}
    >
      <Button className='animate-bounce'>
        <svg
          className="w-6 md:w-8 h-6 md:h-8"
          fill="white"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            d="M4.293 15.707a1 1 0 010-1.414l5-5a1 1 0 011.414 0l5 5a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414 0zm0-6a1 1 0 010-1.414l5-5a1 1 0 011.414 0l5 5a1 1 0 01-1.414 1.414L10 5.414 5.707 9.707a1 1 0 01-1.414 0z"
            clipRule="evenodd"
          />
        </svg>
      </Button>
    </div>
  );
};

export default FooterBtn;
