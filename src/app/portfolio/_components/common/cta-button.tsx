import classNames from 'classnames';
import React, { ButtonHTMLAttributes, FunctionComponent } from 'react';

type Variants = 'default' | 'secondary';

export type CTAButtonProps = {
  variant?: Variants;
  block?: boolean;
} & ButtonHTMLAttributes<HTMLButtonElement>;

const bgVariants: Record<Variants, string> = {
  default:
    'bg-slate-700 md:hover:bg-red-400 md:active:bg-red-500 active:bg-red-600 active:scale-[0.98]',
  secondary:
    'bg-transparent md:hover:bg-slate-500 md:active:bg-slate-400 active:bg-slate-400 :scale-[0.98] text-slate-700 md:hover:text-slate-50',
};

const CTAButton: FunctionComponent<CTAButtonProps> = ({
  variant = 'default',
  block = true,
  ...props
}) => {
  return (
    <div className='relative group p-1'>
      <div className='absolute top-0 left-0 w-5/6 h-3/6 border-t border-l border-slate-400 pointer-events-none'></div>
      <button
        {...props}
        className={classNames(
          'py-3 text-slate-50 transition-colors',
          block ? 'w-full px-5' : 'w-fit px-8 max-w-full',
          bgVariants[variant]
        )}
      ></button>
      <div className='absolute top-1/2 -translate-y-1/2 -right-1 w-6 border-b border-red-400 group-hover:right-1'></div>
      <div className='absolute bottom-0 right-0 w-5/6 h-5/6 border-b border-r border-slate-400 pointer-events-none'></div>
    </div>
  );
};

export default CTAButton;
