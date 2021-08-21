import React, { Suspense, lazy } from 'react';
import { Element } from 'react-scroll';
import PortfolioHeader from './PortfolioHeader';
import PortfolioTab from './PortfolioTab';
import HireMe from './HireMe';

const Portfolio = () => {
  return (
    <Element id="portfolios">
      <div className="bg-portfolio-bg overflow-hidden">
        <div className="w-11/12 md:w-80% mx-auto mb-16">
          <PortfolioHeader />
          <PortfolioTab />
          <HireMe />
        </div>
      </div>
    </Element>
  );
};

export default Portfolio;
