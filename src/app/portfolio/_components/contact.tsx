import React, { FunctionComponent } from 'react';
import SectionHeading from './common/section-heading';
import { Inter } from 'next/font/google';
import classNames from 'classnames';
import TextInput from './form/text-input';
import Stack from '@/_components/layouts/stack';
import CTAButton from './common/cta-button';

const interFont = Inter({ subsets: ['latin'] });

export type ContactSectionProps = {
  // No Props
};

const ContactSection: FunctionComponent<ContactSectionProps> = (props) => {
  return (
    <Stack className='py-12 space-y-8'>
      <div>
        <SectionHeading>want to work with me?</SectionHeading>
        <h3
          className={classNames(
            'uppercase font-black text-[60px] leading-[1] -ml-4',
            interFont.className
          )}
        >
          CONTACT ME
        </h3>
      </div>
      <form className='px-8'>
        <Stack className='w-[320px] space-y-4'>
          <h4 className='text-sm font-medium text-slate-500'>
            feel free to contact me and I will get back to you as soon as I can.
          </h4>
          <TextInput placeholder='name' name='name' autoComplete='name' />
          <TextInput placeholder='email' name='email' autoComplete='email' />
          <TextInput placeholder='tell me about it' />
          <CTAButton type='submit'>send</CTAButton>
        </Stack>
      </form>
    </Stack>
  );
};

export default ContactSection;
