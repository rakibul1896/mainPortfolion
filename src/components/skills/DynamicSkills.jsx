import React from 'react';

const DynamicSkills = (props) => {
  return (
    <div className="flex justify-between w-11/12 md:w-80% 2xl:w-308 mx-auto mb-6 h-5 xl:h-7" id="skills" data-aos={props.fade}>
      <div className="w-4 xl:w-6 mr-3">
        <img src={props.logo} alt="Html5 logo." className='xl:w-full' />
      </div>

      <div className="w-11/12 bg-white overflow-hidden relative ">
        <h1 className="text-white text-sm xl:text-xl font-medium absolute px-4">
          {props.title}
        </h1>

        <div className={'bg-hover-color h-full transition-width ' + props.width}></div>
        <p className=" text-text_head font-semibold xl:text-xl absolute right-1 xl:right-3 -top-1">
          {props.percent}
        </p>
      </div>
    </div>
  );
};

export default DynamicSkills;
