import React from 'react';

const CardHeader = (props) => {
  return (
    <div className=" text-center my-4" onClick={props.showOverlay}>
      <h1 className="text-2xl text-text_head cursor-pointer  transition-all duration-500 ease-in-out hover:tracking-widest" >
        {props.header}
      </h1>
      <p className="">{props.code}</p>
    </div>
  );
};

export default CardHeader;
