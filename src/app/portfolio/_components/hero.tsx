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
    title: 'jhonnagines@gmail.com',
    link: 'mailto:jhonnagines@gmail.com',
  },
  {
    title: 'linkedin',
    link: 'https://ph.linkedin.com/in/jhonna-mae-gines-06a8861a6',
  },
  {
    title: '(+63) 997 971 3468',
    link: 'tel:+63-997-971-3468',
  },
];

const NavLink = ({
  name,
  ...props
}: React.ComponentProps<typeof Link> & { name: string }) => (
  <li className='md:hover:text-red-400'>
    <Link {...props}>{name}</Link>
  </li>
);

const HeroSection: FunctionComponent<HeroSectionProps> = (props) => {
  return (
    <Stack className='min-h-screen h-full py-10'>
      <Row className='justify-end'>
        <nav>
          <ul className='flex space-x-8'>
            <NavLink name='about' href='/portfolio#about' />
            <NavLink name='projects' href='/portfolio#projects' />
            <NavLink name='contact' href='/portfolio#contact' />
            {/* <NavLink name='components' href='/blogs' />
            <NavLink name='blogs' href='/blogs' /> */}
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
              <span className='text-slate-900 block md:inline tracking-[5px]'>
                JHONNA
              </span>
              {/* <span className='text-slate-900'>GINES</span> */}
            </h1>
            <p className='font-sans font-medium text-slate-600 text-lg lg:text-xl tracking-[5px] md:tracking-[22.5px] lg:tracking-[22.5px]'>
              UI/UX Designer
            </p>
          </Stack>
        </Stack>

        <ol className='flex justify-between md:justify-normal md:space-x-10'>
          {contactItems.map((item) => (
            <NavLink
              href={item.link}
              key={item.title}
              name={item.title}
              target='_blank'
            />
          ))}
        </ol>
      </Stack>
    </Stack>
  );
};

export default HeroSection;
