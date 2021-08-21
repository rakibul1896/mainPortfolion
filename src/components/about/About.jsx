import React from 'react';
import { Element } from 'react-scroll';
import HireMe from './HireMe';

function About() {
  return (
    <Element id="about">
      <div className="bg-about-bg overflow-hidden">
        <div className="my-10 md:mt-20" data-aos="fade-right">
          <h1 className="text-2xl  text-center text-white font-bold">ABOUT</h1>
          <div className=" w-16 h-1 mx-auto bg-white"></div>
        </div>

        <div
          className="md:flex md:items-center  bg-gray-100 overflow-hidden w-11/12 md:w-80% 2xl:w-308 mx-auto rounded-xl mt-16 mb-20"
          data-aos="fade-left"
        >
          <div className="bg-profile bg-cover w-32 md:w-240 h-32 md:h-86 lg:h-88 xl:h-96 mx-auto my-8 md:my-0 rounded-full md:rounded-none "></div>

          <div className="text-center mb-8 md:mb-0 p-4 lg:p-8 xl:px-20">
            <p className="text-xl xl:text-2xl"> Hi there,</p>
            <p className=" text-2xl xl:text-3xl pb-4 lg:pb-8">
              I'm <span className=" text-text_head">Rakibul Hasan</span>.
            </p>
            <p className=" leading-7 2xl:text-xl">
              I’m a creative front-end developer with a passion who loves
              building user-friendly and interactive websites that run across
              platforms & devices, enjoy writing
              <span className=" text-text_head"> &lt;code&gt;</span> and love
              helping people who want to learn how to code. I want to make things those make a difference.
            </p>
            
          </div>
        </div>
        <HireMe />
      </div>
    </Element>
  );
}

export default About;
