import AppDate from '@/_components/common/app-date';
import Row from '@/_components/layouts/row';
import Stack from '@/_components/layouts/stack';
import classNames from 'classnames';
import Link from 'next/link';
import React, { FunctionComponent } from 'react';
import { IBlogPost } from '../_contentful';

export type BlogItemProps = {
  blogPost: IBlogPost;
};

const BlogItem: FunctionComponent<BlogItemProps> = ({ blogPost }) => {
  return (
    <Link href={`/blogs/${blogPost.slug}`}>
      <Row className='items-center group'>
        <div className='relative w-[150px] h-[150px] bg-slate-50 border-b border-l border-r border-slate-400'>
          <div className='absolute border-t border-slate-400 top-0 -left-4 w-[200%]'></div>
        </div>

        <Stack className='flex-1 h-full p-4 relative'>
          <h4 className='font-semibold text-slate-800'>{blogPost.title}</h4>

          <p className='line-clamp-2 text-sm text-slate-500'>
            {blogPost.description}
          </p>
          <Row className='justify-between items-end'>
            <span className='mt-2 font-medium text-sm text-slate-500'>
              learn more...
            </span>
            <div className='text-slate-400 text-sm italic'>
              <AppDate dateTime='05-Jul-2023 09:00 AM' />
            </div>
          </Row>

          <div
            className={classNames(
              'absolute bottom-0 right-0 h-4/5 w-1/2 border-r border-b border-slate-400',
              'transition'
            )}
          ></div>
        </Stack>
      </Row>
    </Link>
  );
};

export default BlogItem;
