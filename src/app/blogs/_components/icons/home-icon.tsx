import React, { FunctionComponent } from 'react';

const HomeIcon: FunctionComponent<React.HtmlHTMLAttributes<SVGElement>> = (
  props
) => {
  return (
    <svg
      fill='none'
      height='24'
      viewBox='0 0 24 24'
      width='24'
      xmlns='http://www.w3.org/2000/svg'
      {...props}
    >
      <g fill='currentColor'>
        <path d='m17.79 22.75h-11.58c-2.74 0-4.96-2.23-4.96-4.97v-7.41c0-1.36003.84-3.07003 1.92-3.91003l5.39-4.2c1.62-1.259996 4.21-1.319996 5.89-.14l6.18 4.33c1.19.83 2.12 2.61 2.12 4.06003v7.28c0 2.73-2.22 4.96-4.96 4.96zm-8.31-19.31003-5.39 4.2c-.71.56-1.34 1.83-1.34 2.73003v7.41c0 1.91 1.55 3.47 3.46 3.47h11.58c1.91 0 3.46-1.55 3.46-3.46v-7.28c0-.96003-.69-2.29003-1.48-2.83003l-6.18-4.33c-1.14-.8-3.02-.76-4.11.09z' />
        <path d='m12 18.75c-.41 0-.75-.34-.75-.75v-3c0-.41.34-.75.75-.75s.75.34.75.75v3c0 .41-.34.75-.75.75z' />
      </g>
    </svg>
  );
};

export default HomeIcon;
