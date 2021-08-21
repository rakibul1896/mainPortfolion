import React from 'react';

const X = (props) => {
  return (
    <div
      className="absolute top-2% right-7% cursor-pointer text-3xl font-thin"
      onClick={props.hideOverlay}
    >
      <svg
        className="w-7 h-7 text-border_color"
        fill="none"
        stroke="currentcolor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={3}
          d="M6 18L18 6M6 6l12 12"
        />
      </svg>
    </div>
  );
};

export default X;
