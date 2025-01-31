import Stack from '@/_components/layouts/stack';
import React, { FunctionComponent, useMemo } from 'react';
import SectionHeading from './common/section-heading';
import TextHighlight from './common/text-highlight';
import CTAButton from './common/cta-button';
import Row from '@/_components/layouts/row';
import dayjs from 'dayjs';
import Link from 'next/link';
import { IPortfolio } from '../_contentful';
import { ReactMarkdown } from 'react-markdown/lib/react-markdown';

export type AboutSectionProps = {
  portfolio: IPortfolio;
};

const yearStarted = 2017;

const AboutSection: FunctionComponent<AboutSectionProps> = ({ portfolio }) => {
  const currentYear = dayjs().year();
  const yearsOfExperience = useMemo(
    () => currentYear - yearStarted,
    [currentYear]
  );

  return (
    <section id='about'>
      <Stack className='py-36 space-y-6'>
        <Stack className='space-y-2'>
          <SectionHeading>about</SectionHeading>
          <Stack className='space-y-12'>
            <div className='max-w-screen-md text-xl'>
              <ReactMarkdown
                components={{
                  strong: ({ children }) => (
                    <TextHighlight>{children}</TextHighlight>
                  ),
                }}
                className='line-break'
              >
                {portfolio.about}
              </ReactMarkdown>
            </div>
            {/* <p className='text-xl max-w-screen-md'>
              With <TextHighlight>{yearsOfExperience}</TextHighlight> years of
              experience, I am a seasoned{' '}
              <TextHighlight>full-stack developer</TextHighlight> with a focus
              on <TextHighlight>front-end development</TextHighlight>. My
              passion lies in coding, and I take great pleasure in creating
              captivating user experiences.
            </p>

            <p className='text-xl max-w-screen-md'>
              As time has passed, I have embraced a simpler and more{' '}
              <TextHighlight>minimalist</TextHighlight> approach. I firmly
              believe that in app and system development, complexity should be
              avoided, and simplicity should be prioritized for better results.
            </p> */}
            <Row className='space-x-8'>
              <Link href={'/portfolio#contact'}>
                <CTAButton block={false}>let&lsquo;s talk</CTAButton>
              </Link>
              <Link href={portfolio.resume.url} target='_blank'>
                <CTAButton block={false} variant='secondary'>
                  view cv
                </CTAButton>
              </Link>
            </Row>
          </Stack>
        </Stack>
      </Stack>
    </section>
  );
};

export default AboutSection;
