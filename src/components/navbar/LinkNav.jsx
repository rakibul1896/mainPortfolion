import React, { useEffect, useState } from 'react';
import { NavLink } from '../Elements';

const LinkNav = (props) => {
  const { showLinks, setShowLinks } = props;
  const hideLink = () => {
    if (showLinks) {
      setShowLinks(false);
    }
  };

  const [offsetVal, setOffsetVal] = useState(true);

  useEffect(() => {
    const forPhone = () => {
      if (window.innerWidth >= 768) {
        setOffsetVal(false);
      } else {
        setOffsetVal(true);
      }
    };
    
    forPhone();
    window.addEventListener('resize', forPhone);
    return () => {
      
      window.removeEventListener('resize', forPhone);
    };
  });

  return (
    <div>
      <NavLink
        to="home"
        smooth={true}
        duration={700}
        spy={true}
        offset={offsetVal ? -240 : 0}
        className="block py-2 px-6 md:py-4 no-underline md:inline-block transition duration-700 ease-in-out  hover:bg-green-500  hover:text-black cursor-pointer hover:no-underline"
        onClick={hideLink}
      >
        HOME
      </NavLink>
      <NavLink
        to="about"
        smooth={true}
        duration={700}
        spy={true}
        offset={offsetVal ? -240 : 0}
        className="block py-2 px-6 md:py-4 no-underline md:inline-block transition duration-700 ease-in-out  hover:bg-green-500  hover:text-black cursor-pointer hover:no-underline"
        onClick={hideLink}
      >
        ABOUT
      </NavLink>
      <NavLink
        to="what_i_do"
        smooth={true}
        duration={700}
        spy={true}
        offset={offsetVal ? -240 : 0}
        className="block py-2 px-6 md:py-4 no-underline md:inline-block transition duration-700 ease-in-out  hover:bg-green-500  hover:text-black cursor-pointer hover:no-underline"
        onClick={hideLink}
      >
        WHAT I DO
      </NavLink>
      <NavLink
        to="skills"
        smooth={true}
        duration={700}
        spy={true}
        offset={offsetVal ? -240 : 0}
        className="block py-2 px-6 md:py-4 no-underline md:inline-block transition duration-700 ease-in-out  hover:bg-green-500  hover:text-black cursor-pointer hover:no-underline"
        onClick={hideLink}
      >
        SKILLS
      </NavLink>
      <NavLink
        to="portfolios"
        smooth={true}
        duration={700}
        spy={true}
        offset={offsetVal ? -240 : 0}
        className="block py-2 px-6 md:py-4 no-underline md:inline-block transition duration-700 ease-in-out  hover:bg-green-500  hover:text-black cursor-pointer hover:no-underline"
        onClick={hideLink}
      >
        PORTFOLIOS
      </NavLink>
      <NavLink
        to="contacts"
        smooth={true}
        duration={700}
        spy={true}
        offset={offsetVal ? -240 : 0}
        className="block py-2 px-6 md:py-4 no-underline md:inline-block transition duration-700 ease-in-out  hover:bg-green-500  hover:text-black cursor-pointer hover:no-underline"
        onClick={hideLink}
      >
        CONTACTS
      </NavLink>
    </div>
  );
};

export default LinkNav;
