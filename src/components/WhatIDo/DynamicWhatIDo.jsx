import React from 'react';

const DynamicWhatIDo = (props) => {
  return (
    <div className="xl:flex xl:items-center  bg-gray-100 overflow-hidden w-11/12  mx-auto rounded-xl mt-10 " data-aos={props.fade}>
      <img src={props.logo} alt="Logo" className="w-16 xl:w-28 xl:p-6 mx-auto mt-6 mb-2 xl:my-0 select-none" />
      <div className="text-center mb-6 xl:mb-0 p-4 xl:px-6">
        <h1 className="text-2xl font-bold text-text_head mb-1">
          {props.header}
        </h1>
        <p>{props.text}</p>
      </div>
    </div>
  );
};

export default DynamicWhatIDo;
