import React, { FunctionComponent } from 'react';
import HeroSection from './_components/hero';
import AboutSection from './_components/about';
import ProjectsSection from './_components/projects';

export type PortfolioPageProps = {
  // No Props
};

const PortfolioPage: FunctionComponent<PortfolioPageProps> = (props) => {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <ProjectsSection />
    </>
  );
};

export default PortfolioPage;
