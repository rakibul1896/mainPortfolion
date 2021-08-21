import React from 'react';
import { Element } from 'react-scroll';
import ContactHeader from './ContactHeader';
import DynamicContact from './DynamicContact';
import { ContactArray } from './ContactArray';


const Contact = () => {
  return (
    <Element className="bg-about-bg overflow-hidden" id="contacts" >
      <div className="w-11/12 md:w-80% 2xl:w-308 mx-auto" data-aos="fade-left">
        <ContactHeader />
        
        <div className="grid md:grid-cols-2 xl:grid-cols-3 mb-16" >
          {ContactArray.map((val, ind) => {
            return (
              <DynamicContact
                logo={val.logo}
                logoInfo={val.logoInfo}
                header={val.header}
                para={val.para}
                key={ind}
              />
            );
          })}
        </div>
      </div>
    </Element>
  );
};

export default Contact;
