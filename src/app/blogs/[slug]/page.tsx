import Stack from '@/_components/layouts/stack';
import React, { FunctionComponent } from 'react';

export type BlogDetailsProps = {
  // No Props
};

const BlogDetails: FunctionComponent<BlogDetailsProps> = (props) => {
  return (
    <Stack className=''>
      <div className='p-8 border-b border-slate-400'>
        <h1 className='font-black text-4xl leading-loose'>
          Lorem Ipsum - King of all Kings
        </h1>
        <h2 className='font-medium itelic'>by Paolo Vincent Julian</h2>
        <h2 className='font-medium text-sm italic'>03-Jul-2023 09:00AM</h2>
      </div>
    </Stack>
  );
};

export default BlogDetails;
