import Stack from '@/_components/layouts/stack';
import React, { FunctionComponent, useMemo } from 'react';
import SectionHeading from './common/section-heading';
import TextHighlight from './common/text-highlight';
import CTAButton from './common/cta-button';
import Row from '@/_components/layouts/row';
import dayjs from 'dayjs';
import Link from 'next/link';

export type AboutSectionProps = {
  // No Props
};

const yearStarted = 2017;

const AboutSection: FunctionComponent<AboutSectionProps> = (props) => {
  const currentYear = dayjs().year();
  const yearsOfExperience = useMemo(
    () => currentYear - yearStarted,
    [currentYear]
  );

  return (
    <Stack className='py-36 space-y-6'>
      <Stack className='space-y-2'>
        <SectionHeading>about</SectionHeading>
        <p className='text-xl max-w-screen-md'>
          With <TextHighlight>{yearsOfExperience}</TextHighlight> years of
          experience, I am a seasoned{' '}
          <TextHighlight>full-stack developer</TextHighlight> with a focus on{' '}
          <TextHighlight>front-end development</TextHighlight>. My passion lies
          in coding, and I take great pleasure in creating captivating user
          experiences.
        </p>
        <p className='text-xl max-w-screen-md'>
          As time has passed, I have embraced a simpler and more{' '}
          <TextHighlight>minimalist</TextHighlight> approach. I firmly believe
          that in app and system development, complexity should be avoided, and
          simplicity should be prioritized for better results.
        </p>
      </Stack>
      <Row className='space-x-8'>
        <Link href={'/portfolio#contact'}>
          <CTAButton block={false}>let&lsquo;s talk</CTAButton>
        </Link>
        <CTAButton block={false} variant='secondary'>
          download cv
        </CTAButton>
      </Row>
    </Stack>
  );
};

export default AboutSection;
