import React, { FunctionComponent } from 'react';
import HeroSection from './_components/hero';
import AboutSection from './_components/about';
import ProjectsSection from './_components/projects';
import ContactSection from './_components/contact';
import { getPortfolioItems } from './_api/portfolio-item';
import { getPortfolio } from './_api/portfolio';

export type PortfolioPageProps = {
  // no props
};

const PortfolioPage: FunctionComponent<PortfolioPageProps> = async () => {
  const [portfolioItems, portfolio] = await Promise.all([
    getPortfolioItems(),
    getPortfolio(),
  ]);

  return (
    <>
      <HeroSection />
      <AboutSection portfolio={portfolio} />
      <ProjectsSection items={portfolioItems} />
      <ContactSection portfolio={portfolio} />
    </>
  );
};

export default PortfolioPage;
