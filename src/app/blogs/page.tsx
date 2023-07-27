import React, { FunctionComponent } from 'react';
import BlogItem from './_components/blog-item';
import Stack from '@/components/layouts/stack';
import Row from '@/components/layouts/row';

export type BlogsPageProps = {
  // No Props
};

const BlogsPage: FunctionComponent<BlogsPageProps> = (props) => {
  return (
    <>
      <div className='p-12'>
        <Stack className='space-y-8'>
          <Row className='justify-between'>
            <h1 className='font-semibold text-slate-600'>
              view my latest blogs
            </h1>
            <input
              className='p-2 border-b border-slate-400 bg-inherit w-fit focus:outline-none focus:border-blue-400'
              placeholder='search'
            />
          </Row>
          <Stack className='space-y-6'>
            <BlogItem />
            <BlogItem />
            <BlogItem />
            <BlogItem />
            <BlogItem />
          </Stack>
        </Stack>
      </div>
    </>
  );
};

export default BlogsPage;
