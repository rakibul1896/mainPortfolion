import React from 'react';


const DynamicContact = (props) => {
    const {logo, logoInfo, header, para} = props;
  return (
    <div className="bg-gray-100 overflow-hidden mb-8 rounded-xl mx-6" >
      <img
        src={logo}
        alt={logoInfo}
        className={header === 'E-mail' ? "text-border_color w-10 h-8 mx-auto my-6" : "text-border_color w-10 h-10 mx-auto my-6"}
      />
      <div className="text-center mb-6">
        <h1 className="text-xl font-medium">{header}</h1>
        <p className="mt-3 text-lg font-normal text-text_head break-words px-4 font-sans">
          {para}
        </p>
      </div>
    </div>
  );
};

export default DynamicContact;
