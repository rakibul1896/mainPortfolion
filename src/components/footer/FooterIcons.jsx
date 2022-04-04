import React from 'react';

const FooterIcons = () => {
  return (
    <div className="flex text-white text-xl md:text-3xl">
      <a
        href="/"
        target="_blank"
        rel="noreferrer noopener"
        className="bg-footer_icon hover:bg-border_color hover:text-white transition-all ease-in-out duration-500 mx-2.5 md:mx-3.5 mb-3.5  md:mb-11.5 rounded-md"
      >
        <i className="mx-3.5 md:mx-20px my-2.5 fab md:my-16px fa-facebook-f"></i>
      </a>
      <a
        href="/"
        target="_blank"
        rel="noreferrer noopener"
        className="bg-footer_icon hover:bg-border_color hover:text-white  transition-all ease-in-out duration-500 mx-2.5 mb-3.5 md:mb-11.5 rounded-md"
      >
        <i className="mx-3.5 md:mx-20px my-2.5 fab md:my-16px fa-linkedin-in"></i>
      </a>
      <a
        href="/"
        target="_blank"
        rel="noreferrer noopener"
        className="bg-footer_icon hover:bg-border_color hover:text-white  transition-all ease-in-out duration-500 mx-2.5 mb-3.5 md:mb-11.5 rounded-md"
      >
        <i className="mx-3.5 md:mx-20px my-2.5 fab md:my-16px fa-twitter"></i>
      </a>
      <a
        href="/"
        target="_blank"
        rel="noreferrer noopener"
        className="bg-footer_icon hover:bg-border_color hover:text-white  transition-all ease-in-out duration-500 mx-2.5 mb-3.5 md:mb-11.5 rounded-md"
      >
        <i className="mx-3.5 md:mx-20px my-2.5 fab md:my-16px fa-instagram"></i>
      </a>
    </div>
  );
};

export default FooterIcons;
