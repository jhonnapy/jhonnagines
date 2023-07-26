import React, { FunctionComponent } from 'react';
import HeroSection from './_components/hero';
import AboutSection from './_components/about';
import ProjectsSection from './_components/projects';
import ContactSection from './_components/contact';

export type PortfolioPageProps = {
  // No Props
};

const PortfolioPage: FunctionComponent<PortfolioPageProps> = (props) => {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <ProjectsSection />
      <ContactSection />
    </>
  );
};

export default PortfolioPage;
