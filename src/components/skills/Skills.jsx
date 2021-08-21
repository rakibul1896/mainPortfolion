import React from 'react';
import DynamicArray from './DynamicArray';
import DynamicSkills from './DynamicSkills';
import SkillsHeader from './SkillsHeader';

const Skills = () => {
  return (
    <div className="bg-skills-bg overflow-hidden" id='skills'>
      <SkillsHeader />
      <div className="md:my-20">
        {DynamicArray.map((val, ind) => {
          return (
            <DynamicSkills
              logo={val.logo}
              title={val.title}
              percent={val.percent}
              width={val.width}
              fade={val.fade}
              key={ind}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Skills;
