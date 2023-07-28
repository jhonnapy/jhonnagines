import classNames from 'classnames';
import React, { FunctionComponent } from 'react';

export type ProjectImageProps = {
  // No Props
  dummy?: boolean;
};

const ProjectImage: FunctionComponent<ProjectImageProps> = ({
  dummy = false,
}) => {
  return (
    <div
      className={classNames(
        'h-[400px] w-[400px] z-0',
        dummy ? 'border border-slate-400' : 'bg-slate-50'
      )}
    ></div>
  );
};

export default ProjectImage;
