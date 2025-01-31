import Stack from '@/_components/layouts/stack';
import React, { FunctionComponent } from 'react';
import SectionHeading from './common/section-heading';
import ProjectItem from './common/project-item';
import { latestProjects } from '../_utils/projects';
import { IPortfolioItem } from '../_contentful';

export type ProjectsSectionProps = {
  items: IPortfolioItem[];
};

const ProjectsSection: FunctionComponent<ProjectsSectionProps> = ({
  items,
}) => {
  return (
    <section id="projects">
      <Stack className='py-10 mb-32 space-y-4'>
        <SectionHeading>latest projects</SectionHeading>
        <Stack className='space-y-32'>
          {items.map((project, i) => (
            <ProjectItem
              key={i}
              variant={i % 2 === 0 ? 'left-image' : 'right-image'}
              project={project}
            />
          ))}
        </Stack>
      </Stack>
    </section>
  );
};

export default ProjectsSection;
