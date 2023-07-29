import React, { FunctionComponent, HtmlHTMLAttributes } from 'react';

export type HashTagProps = {
  // No Props
} & HtmlHTMLAttributes<HTMLSpanElement>;

const HashTag: FunctionComponent<HashTagProps> = ({ children, ...props }) => {
  return (
    <span {...props} className='text-sm text-red-400 italic'>
      #{children}
    </span>
  );
};

export default HashTag;
