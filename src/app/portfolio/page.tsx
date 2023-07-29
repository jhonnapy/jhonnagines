import React, { FunctionComponent } from 'react';
import HeroSection from './_components/hero';
import AboutSection from './_components/about';
import ProjectsSection from './_components/projects';
import ContactSection from './_components/contact';
import contentfulGQLClient from '@/_lib/contentful-graphql';
import { getPortfolioItems } from './_api/portfolio-item';

export type PortfolioPageProps = {
  // no props
};

const PortfolioPage: FunctionComponent<PortfolioPageProps> = async () => {
  const portfolioItems = await getPortfolioItems();

  return (
    <>
      <HeroSection />
      <AboutSection />
      <ProjectsSection items={portfolioItems} />
      <ContactSection />
    </>
  );
};

export default PortfolioPage;
