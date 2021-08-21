import React from 'react';
import { Link } from 'react-scroll';

const Btn = () => {
  return (
    <div className="mt-10 w-full ">
      <div className="flex justify-around ">
        <Link
          to="about"
          smooth={true}
          offset={-42}
          className="text-sm px-4 sm:px-5 py-2 border-2 rounded-lg  hover:bg-hover-color hover:text-white hover:border-transparent hover:no-underline cursor-pointer xl:text-lg xl:px-9 xl:py-3 animate-bounce hover:animate-none"
        >
          View My Work
          <svg
            className="w-6 h-5 pl-2 animate-bounce inline-block"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </Link>
      </div>
    </div>
  );
};

export default Btn;
