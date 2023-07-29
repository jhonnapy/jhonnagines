import classNames from 'classnames';
import React, { ButtonHTMLAttributes, FunctionComponent } from 'react';

type Variants = 'default' | 'secondary';

export type CTAButtonProps = {
  variant?: Variants;
  block?: boolean;
} & ButtonHTMLAttributes<HTMLButtonElement>;

const bgVariants: Record<Variants, string> = {
  default:
    'bg-red-400 md:hover:bg-red-500 md:active:bg-red-600 active:bg-red-600 active:scale-[0.98]',
  secondary:
    'bg-slate-500 md:hover:bg-slate-600 md:active:bg-slate-700 active:bg-slate-700 active:scale-[0.98]',
};

const CTAButton: FunctionComponent<CTAButtonProps> = ({
  variant = 'default',
  block = true,
  ...props
}) => {
  return (
    <div className='relative py-2 px-2'>
      <div className='absolute top-1 left-1 w-5/6 h-3/6 border-t border-l border-slate-400 pointer-events-none'></div>
      <button
        {...props}
        className={classNames(
          'py-2 text-slate-50 transition-colors',
          block ? 'w-full px-5' : 'w-fit px-8 max-w-full',
          bgVariants[variant]
        )}
      ></button>
      <div className='absolute bottom-1 right-1 w-5/6 h-5/6 border-b border-r border-slate-400 pointer-events-none'></div>
    </div>
  );
};

export default CTAButton;
