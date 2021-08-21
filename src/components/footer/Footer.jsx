import React from 'react';
import FooterBtn from './FooterBtn';
import FooterIcons from './FooterIcons';

const Footer = () => {
  return (
    <div className="flex justify-around items-center bg-footer h-40 md:h-60 relative">
      <FooterBtn />
      <div>
        <FooterIcons />

        <p className="text-xs text-gray-400 text-center">
          RAKIBUL HASAN <span className="text-text_head">©2021</span>
        </p>
      </div>
    </div>
  );
};

export default Footer;
