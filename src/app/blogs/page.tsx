import React, { FunctionComponent } from 'react';

export type BlogsPageProps = {
  // No Props
};

const BlogsPage: FunctionComponent<BlogsPageProps> = (props) => {
  return (
    <>
      <div className='p-12'>
        <h1>view my latest blogs</h1>
      </div>
    </>
  );
};

export default BlogsPage;
