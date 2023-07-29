import React, { FunctionComponent } from 'react';
import HeroSection from './_components/hero';
import AboutSection from './_components/about';
import ProjectsSection from './_components/projects';
import ContactSection from './_components/contact';
import contentfulGQLClient from '@/_lib/contentful-graphql';

export type PortfolioPageProps = {
  // no props
};

async function getData() {
  const query = `
    query GetAllPortfolioItem {
      portfolioItemCollection(order: sys_firstPublishedAt_ASC) {
          items {
            name
            content
            description
            tags
          }
      }
    }
  `;
  const res = await contentfulGQLClient.query({ query });
  const { data } = await res.json();

  return data.portfolioItemCollection.items;
}

const PortfolioPage: FunctionComponent<PortfolioPageProps> = async () => {
  const portfolioItems = await getData();

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
