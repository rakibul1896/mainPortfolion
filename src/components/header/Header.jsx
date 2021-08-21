import React from 'react';
import { Element } from 'react-scroll';
import Logo from './Logo'
import HeaderAbout from './HeaderAbout';

const Header = () => {
  return (
    <Element id='home'>
      <div className="h-screen bg-header_1 text-white relative" >
      <Logo />
      <HeaderAbout />
    </div>
    </Element>
    
  );
};

export default Header;
