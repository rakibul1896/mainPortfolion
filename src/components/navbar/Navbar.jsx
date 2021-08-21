import React, { useState, useEffect } from 'react';
import hamburger from '../../images/bar.png';
import LinkNav from './LinkNav';

const Navbar = () => {
  const [showLink, setShowLink] = useState(false);
  const [showNav, setShowNav] = useState(false);

  useEffect(() => {
    const hiddenMenu = () => {
      if (window.innerWidth > 768) {
        setShowLink(false);
      }
    };

    const hideLink = () => {
      if (showLink) {
        setShowLink(false);
      }
    };

    let prevScroll = window.pageYOffset;
    const transitionNav = () => {
      let currentScroll = window.pageYOffset;
      if (prevScroll > currentScroll) {
        setShowNav(true);
      } else {
        setShowNav(false);
      }
      prevScroll = currentScroll;
    };

    window.addEventListener('click', hideLink);
    window.addEventListener('resize', hiddenMenu);
    window.addEventListener('scroll', transitionNav);

    return () => {
      window.removeEventListener('click', hideLink);
      window.removeEventListener('resize', hiddenMenu);
      window.removeEventListener('scroll', transitionNav);
    };
  }, [showLink]);

  return (
    <div
      className={
        showNav
          ? 'sticky top-0 transition-top duration-500 ease-in-out z-50'
          : showLink
          ? 'sticky top-0 transition-top duration-500 ease-in-out z-50'
          : 'sticky -top-12 transition-top duration-500 ease-in-out'
      }
    >
      <div className="bg-black text-white overflow-hidden  md:border-b-4  md:border-text_head ">
        <div className=" flex justify-between border-b-4  border-text_head md:border-none">
          <div></div>
          <img
            src={hamburger}
            alt="Hamburger"
            className=" md:hidden w-10 p-2 mr-3 cursor-pointer"
            onClick={() => setShowLink(!showLink)}
          />
        </div>

        <div
          className={
            showLink
              ? 'max-h-60  transition-max-height duration-500 ease-in-out '
              : 'max-h-0 md:max-h-full transition-max-height duration-500 ease-in-out'
          }
        >
          <LinkNav showLinks={showLink} setShowLinks={setShowLink} />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
