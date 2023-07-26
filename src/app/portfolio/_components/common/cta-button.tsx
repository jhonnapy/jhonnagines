import classNames from 'classnames';
import React, { ButtonHTMLAttributes, FunctionComponent } from 'react';

type Variants = 'default' | 'secondary';

export type CTAButtonProps = {
  variant?: Variants;
} & ButtonHTMLAttributes<HTMLButtonElement>;

const CTAButton: FunctionComponent<CTAButtonProps> = (props) => {
  return (
    <div className='relative py-2 px-2'>
      <div className='absolute top-0 left-0 w-5/6 h-3/6 border-t border-l border-slate-400'></div>
      <button
        {...props}
        className={classNames('py-2 px-5 w-full bg-red-400 text-slate-50')}
      ></button>
      <div className='absolute bottom-0 right-0 w-5/6 h-5/6 border-b border-r border-slate-400'></div>
    </div>
  );
};

export default CTAButton;
