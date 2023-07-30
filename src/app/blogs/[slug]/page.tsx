import Stack from '@/_components/layouts/stack';
import React, { FunctionComponent } from 'react';
import { getBlogPostBySlug } from '../_api/blog-post';
import AppDate from '@/_components/common/app-date';
import AppReactMarkdown from '@/_components/markdown/app-react-markdown';
import Link from 'next/link';

export type BlogDetailsProps = {
  params: {
    slug: string;
  };
};

const BlogDetails: FunctionComponent<BlogDetailsProps> = async ({ params }) => {
  const blogPost = await getBlogPostBySlug(params.slug);

  return (
    <Stack className=''>
      <div className='p-8'>
        <Stack className='space-y-12'>
          <nav className='text-slate-600 flex space-x-2'>
            <Link href={'/blogs'}>blogs</Link>
            <span>{'>'}</span>
            <span className='text-slate-500'>{blogPost.slug}</span>
          </nav>
          <Stack className='relative pb-8'>
            <p className='text-slate-500 text-sm'>
              <AppDate dateTime={blogPost.sys.publishedAt} />
            </p>
            <h1 className='font-black text-5xl leading-tight text-slate-700'>
              {blogPost.title}
            </h1>
            <div className='absolute bottom-0 left-0 w-3/6 border-b border-slate-400'></div>
          </Stack>

          <div>
            <AppReactMarkdown>{blogPost.content}</AppReactMarkdown>
          </div>
        </Stack>
      </div>
    </Stack>
  );
};

export default BlogDetails;
