import classNames from 'classnames';
import React, { FunctionComponent } from 'react';

const H1: FunctionComponent<React.HtmlHTMLAttributes<HTMLHeadingElement>> = ({
  className,
  ...props
}) => {
  return (
    <h1
      className={classNames('text-slate-700 font-bold text-6xl', className)}
      {...props}
    ></h1>
  );
};

const H2: FunctionComponent<React.HtmlHTMLAttributes<HTMLHeadingElement>> = ({
  className,
  ...props
}) => {
  return (
    <h2
      className={classNames('text-slate-700 font-bold text-2xl', className)}
      {...props}
    ></h2>
  );
};

const H3: FunctionComponent<React.HtmlHTMLAttributes<HTMLHeadingElement>> = ({
  className,
  ...props
}) => {
  return (
    <h3
      className={classNames('text-slate-700 font-semibold text-xl', className)}
      {...props}
    ></h3>
  );
};

interface AppHeadingSubComponents {
  H1: typeof H1;
  H2: typeof H2;
  H3: typeof H3;
}

export type AppHeadingProps = {};

const AppHeading: AppHeadingSubComponents = {
  H1,
  H2,
  H3,
};

export default AppHeading;
