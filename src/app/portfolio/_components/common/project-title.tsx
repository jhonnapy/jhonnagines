import classNames from 'classnames';
import React, { FunctionComponent, HtmlHTMLAttributes } from 'react';

type Sizes = 'base' | 'lg';

const fontSizes: Record<Sizes, string> = {
  base: 'text-2xl',
  lg: 'text-5xl',
};

export type ProjectTitleProps = {
  size?: Sizes;
} & HtmlHTMLAttributes<HTMLHeadingElement>;

const ProjectTitle: FunctionComponent<ProjectTitleProps> = ({
  size = 'base',
  ...props
}) => {
  return (
    <h3
      {...props}
      className={classNames(
        'font-semibold text-slate-700',
        fontSizes[size]
      )}
    ></h3>
  );
};

export default ProjectTitle;
