import classNames from 'classnames';
import React, { FunctionComponent, HtmlHTMLAttributes } from 'react';

export type ProjectTitleProps = {
  // No Props
} & HtmlHTMLAttributes<HTMLHeadingElement>;

const ProjectTitle: FunctionComponent<ProjectTitleProps> = (props) => {
  return (
    <h3
      {...props}
      className={classNames('font-semibold text-2xl text-slate-700')}
    ></h3>
  );
};

export default ProjectTitle;
