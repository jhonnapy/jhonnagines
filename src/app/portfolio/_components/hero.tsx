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
    link: '#',
  },
  {
    title: 'linkedin',
    link: '#',
  },
  {
    title: 'paolojulian.personal@gmail.com',
    link: 'mailto:paolojulian.personal@gmail.com',
  },
];

const HeroSection: FunctionComponent<HeroSectionProps> = (props) => {
  return (
    <Stack className='relative min-h-screen h-full p-10'>
      <div className='absolute top-0 right-10'>
        <div className='absolute right-0 top-12 border-t border-r border-slate-600 h-60 w-60'></div>
        <div className='absolute right-2 top-10 border-t border-r border-slate-600 h-48 w-72'></div>
      </div>

      <Stack className='flex-1'>
        <Stack className='flex-1 justify-center'>
          <p className='font-medium text-xl text-slate-500'>hello, I am</p>
          <h1
            className={classNames(
              interFont.className,
              'font-black sm:text-[80px] lg:text-[96px] leading-[1]'
            )}
          >
            <span className='text-slate-700'>PAOLO</span>
            <span className='text-slate-900'>JULIAN</span>
          </h1>
          <p className='font-medium text-slate-600 text-xl tracking-[28.2px]'>
            SOFTWARE ENGINEER
          </p>
        </Stack>

        <Row className='space-x-10'>
          {contactItems.map((item) => (
            <Link href={item.link} key={item.title}>
              <span className='font-medium text-slate-700 text-sm'>
                {item.title}
              </span>
            </Link>
          ))}
        </Row>
      </Stack>
    </Stack>
  );
};

export default HeroSection;
