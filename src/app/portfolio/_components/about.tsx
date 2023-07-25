import Stack from '@/_components/layouts/stack';
import React, { FunctionComponent } from 'react';
import SectionHeading from './common/section-heading';
import TextHighlight from './common/text-highlight';

export type AboutSectionProps = {
  // No Props
};

const AboutSection: FunctionComponent<AboutSectionProps> = (props) => {
  return (
    <Stack className='py-36 space-y-2'>
      <SectionHeading>about</SectionHeading>
      <p className='text-xl'>
        Experienced since <TextHighlight>2017</TextHighlight>, I am a{' '}
        <TextHighlight>full-stack developer</TextHighlight> who specialize in{' '}
        <TextHighlight>front-end development</TextHighlight> and thrive on
        crafting captivating user experiences. I enjoy tackling challenging
        projects that push my knowledge to the limit, while embracing the
        elegance of simple yet complex designs.
      </p>
    </Stack>
  );
};

export default AboutSection;
