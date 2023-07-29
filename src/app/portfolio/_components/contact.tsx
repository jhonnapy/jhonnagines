import React, { FunctionComponent } from 'react';
import SectionHeading from './common/section-heading';
import { Inter } from 'next/font/google';
import classNames from 'classnames';
import TextInput from './form/text-input';
import Stack from '@/_components/layouts/stack';
import CTAButton from './common/cta-button';
import Row from '@/_components/layouts/row';

const interFont = Inter({ subsets: ['latin'] });

export type ContactSectionProps = {
  // No Props
};

const ContactSection: FunctionComponent<ContactSectionProps> = (props) => {
  return (
    <Row className={classNames('relative w-full h-fit mb-24')}>
      {/* top divider */}
      <div className='absolute top-0 left-0 border-t border-slate-400 w-[105%]'></div>

      <Stack className='relative space-y-8 border-r border-slate-400 py-12 mr-12'>
        <div className='z-10 bg-main'>
          <SectionHeading>want to work with me?</SectionHeading>
          <h3
            className={classNames(
              'uppercase font-black text-[60px] leading-[1] -ml-4 pr-5',
              interFont.className
            )}
          >
            CONTACT ME
          </h3>
        </div>
        <form className='relative px-8'>
          <Stack className='w-[330px] space-y-8'>
            <Stack className='space-y-4'>
              <h4 className='text-sm font-medium text-slate-500'>
                feel free to contact me and I will get back to you as soon as I
                can.
              </h4>
              <TextInput placeholder='name' name='name' autoComplete='name' />
              <TextInput
                placeholder='email'
                name='email'
                autoComplete='email'
              />
              <TextInput placeholder='tell me about it' />
            </Stack>
            <CTAButton type='submit'>send</CTAButton>
          </Stack>
        </form>

        {/* left divider */}
        <div className='absolute left-0 top-0 border-l border-slate-400 h-full z-0'></div>
        {/* bottom divider */}
        <div className='absolute bottom-12 -left-4 border-b border-slate-400 w-[108%]'></div>
      </Stack>

      <Stack className='relative h-full justify-center flex-1 space-y-16 ml-6 pl-6 border-l border-slate-400 py-12'>
        <Stack className='space-y-6 flex-1'>
          <Stack className='text-slate-600'>
            <h4 className='text-sm font-medium text-slate-500/70 mb-1'>
              availability
            </h4>
            <p>Monday - Friday</p>
            <p>9AM - 6PM</p>
            <p>Weekends</p>
            <p>Emails only</p>
          </Stack>
          <Stack className='text-slate-600'>
            <h4 className='text-sm font-medium text-slate-500/70 mb-1'>
              address
            </h4>
            <p>Upper Dagsian</p>
            <p>Baguio City</p>
            <p>Philippines</p>
            <p>2600</p>
          </Stack>
          <Stack className='text-slate-600'>
            <h4 className='text-sm font-medium text-slate-500/70 mb-1'>
              support
            </h4>
            <p>paolojulian.personal@gmail.com</p>
            <p>(+63) 927 948 8654</p>
          </Stack>
        </Stack>
        <footer>
          <p className='text-sm text-slate-500'>
            Copyright @ 2017-2023 Paolo Vincent Julian.
            <br />
            All rights reserved.
          </p>
        </footer>
      </Stack>
    </Row>
  );
};

export default ContactSection;
