import React, { FunctionComponent } from 'react';
import HeroSection from './_components/hero';
import AboutSection from './_components/about';

export type PortfolioPageProps = {
  // No Props
};

const PortfolioPage: FunctionComponent<PortfolioPageProps> = (props) => {
  return (
    <>
      <HeroSection />
      <AboutSection />
    </>
  );
};

export default PortfolioPage;
