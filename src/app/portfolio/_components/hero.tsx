import React, { FunctionComponent } from 'react';
import { Inter } from 'next/font/google';
import classNames from 'classnames';
import Stack from '@/_components/layouts/stack';
import Row from '@/_components/layouts/row';
import Link from 'next/link';

const interFont = Inter({ subsets: ['latin'] });

export type HeroSectionProps = {
  // No Props
};

const contactItems: { title: string; link: string }[] = [
  {
    title: 'facebook',
    link: 'https://www.facebook.com/profile.php?id=100078321445396',
  },
  {
    title: 'linkedin',
    link: 'https://www.linkedin.com/in/pipz/',
  },
  {
    title: 'paolojulian.personal@gmail.com',
    link: 'mailto:paolojulian.personal@gmail.com',
  },
];

const HeroSection: FunctionComponent<HeroSectionProps> = (props) => {
  return (
    <Stack className='min-h-screen h-full py-10'>
      <Row className='justify-end'>
        <nav>
          <ul className='flex space-x-8'>
            <li>
              <Link href='/portfolio#about'>about</Link>
            </li>
            <li>
              <Link href='/portfolio#projects'>projects</Link>
            </li>
            <li>
              <Link href='/portfolio#contact'>contact</Link>
            </li>
            <li>
              <Link href='/blogs'>components</Link>
            </li>
            <li>
              <Link href='/blogs'>blogs</Link>
            </li>
          </ul>
        </nav>
      </Row>

      <Stack className='flex-1'>
        <Stack className='flex-1 justify-center'>
          <p className='font-medium text-xl text-slate-500 -ml-4'>
            hello, I am
          </p>
          <Stack>
            <h1
              className={classNames(
                interFont.className,
                'font-black text-[80px] lg:text-[96px] leading-[1]'
              )}
            >
              <span className='text-slate-700 block md:inline'>PAOLO</span>
              <span className='text-slate-900'>JULIAN</span>
            </h1>
            <p className='font-sans font-medium text-slate-600 text-lg lg:text-xl tracking-[5px] md:tracking-[22.5px] lg:tracking-[28.2px]'>
              SOFTWARE ENGINEER
            </p>
          </Stack>
        </Stack>

        <Row className='justify-between md:justify-normal md:space-x-10'>
          {contactItems.map((item) => (
            <Link href={item.link} key={item.title} target='_blank'>
              <span className='text-slate-700'>{item.title}</span>
            </Link>
          ))}
        </Row>
      </Stack>
    </Stack>
  );
};

export default HeroSection;
