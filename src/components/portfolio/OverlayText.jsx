import React from 'react';

const OverlayText = (props) => {
  return (
    <div>
      <h1 className="text-center text-xl py-4 text-text_head">{props.header}</h1>
      <p className="text-sm mb-6 px-3 font-light">
        {props.para}
      </p>

      <form action={props.link} target="_blank">
        <button
          type="submit"
          className="border-2 border-text_head mb-6 px-7 py-2 transition-all duration-500 ease-in-out hover:bg-text_head"
        >
          View Page
        </button>
      </form>
    </div>
  );
};

export default OverlayText;