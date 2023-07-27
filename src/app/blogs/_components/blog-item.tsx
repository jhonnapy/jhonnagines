import AppTime from '@/_components/common/app-time';
import Row from '@/_components/layouts/row';
import Stack from '@/_components/layouts/stack';
import classNames from 'classnames';
import Link from 'next/link';
import React, { FunctionComponent } from 'react';

export type BlogItemProps = {
  // No Props
};

const BlogItem: FunctionComponent<BlogItemProps> = (props) => {
  return (
    <Link href='/blogs/lorem-ipsum'>
      <Row className='items-center group'>
        <div className='relative w-[150px] h-[150px] bg-slate-50 border-b border-l border-r border-slate-400'>
          <div className='absolute border-t border-slate-400 top-0 -left-4 w-[200%]'></div>
        </div>

        <Stack className='flex-1 h-full p-4 relative'>
          <h4 className='font-semibold text-slate-800'>
            Lorem Ipsum - King of all Kings
          </h4>

          <p className='line-clamp-2 text-sm text-slate-500'>
            Et reprehenderit cupidatat consectetur occaecat ea aliqua non
            aliquip labore proident exercitation pariatur duis sint. In ea aute
            voluptate et mollit et. Proident minim velit amet tempor velit et
            amet officia sit aliquip qui nostrud. Proident adipisicing aliquip
            sit nisi id veniam consequat dolore commodo.
          </p>
          <Row className='justify-between items-end'>
            <span className='mt-2 font-medium text-sm text-slate-500'>
              learn more...
            </span>
            <div className='text-slate-400 text-sm italic'>
              <AppTime dateTime='05-Jul-2023 09:00 AM' />
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
