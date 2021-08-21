import React from 'react';
import { Element } from 'react-scroll';
import WhatIDoHeader from './WhatIDoHeader';
import DynamicWhatIDo from './DynamicWhatIDo';
import WhatIDoArray from './WhatIDoArray';
const WhatIDo = () => {
  return (
    <Element id="what_i_do">
      <div className="bg-what_i_do-bg overflow-hidden " >
        <WhatIDoHeader />
        <div className="md:w-80% 2xl:w-308 mx-auto md:grid md:grid-cols-2 md:grid-rows-2 mb-10 md:mb-20">
          {WhatIDoArray.map((val, index) => {
            return (
              <DynamicWhatIDo
                header={val.header}
                text={val.text}
                fade={val.fade}
                logo={val.logo}
                key={index}
              />
            );
          })}
        </div>
      </div>
    </Element>
  );
};

export default WhatIDo;
