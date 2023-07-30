import React, { FunctionComponent } from 'react';
import BlogItem from './_components/blog-item';
import Stack from '@/_components/layouts/stack';
import Row from '@/_components/layouts/row';
import { getLatestBlogPosts } from './_api/blog-post';

export type BlogsPageProps = {
  // no props
};

const BlogsPage: FunctionComponent<BlogsPageProps> = async (props) => {
  const blogPosts = await getLatestBlogPosts();

  return (
    <>
      <div className='p-8'>
        <Stack className='space-y-8'>
          <Row className='justify-between'>
            <h1 className='text-slate-600'>blogs</h1>
            <input
              className='p-2 border-b border-slate-400 bg-inherit w-fit focus:outline-none focus:border-blue-400'
              placeholder='search'
            />
          </Row>
          <Stack className='space-y-6'>
            {blogPosts.map((blogPost, i) => (
              <BlogItem blogPost={blogPost} key={i} />
            ))}
          </Stack>
        </Stack>
      </div>
    </>
  );
};

export default BlogsPage;
