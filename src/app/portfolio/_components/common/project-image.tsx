import classNames from 'classnames';
import Image from 'next/image';
import React, { FunctionComponent } from 'react';

export type ProjectImageProps = {
  dummy?: boolean;
  alt: string;
  src: string;
};

const ProjectImage: FunctionComponent<ProjectImageProps> = ({
  alt,
  src,
  dummy = false,
}) => {
  return (
    <div
      className={classNames(
        'h-[400px] w-[440px] z-0 relative',
        dummy ? 'border border-slate-400' : 'bg-slate-50'
      )}
    >
      {src ? (
        <Image
          className='absolute inset-0 left-1/2 -translate-x-1/2'
          alt={alt}
          src={src}
          height={400}
          width={400}
        />
      ) : null}
    </div>
  );
};

export default ProjectImage;
