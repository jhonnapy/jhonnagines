import classNames from 'classnames';
import Image from 'next/image';
import React, { FunctionComponent } from 'react';

export type ProjectImageProps = {
  alt: string;
  src: string;
  dummy?: boolean;
  hasEffects?: boolean;
};

const ProjectImage: FunctionComponent<ProjectImageProps> = ({
  alt,
  src,
  dummy = false,
  hasEffects = true,
}) => {
  return (
    <div
      className={classNames(
        'h-[400px] w-[440px] z-0 relative group overflow-hidden',
        dummy ? 'border border-slate-400' : 'bg-slate-50',
        hasEffects ? 'cursor-pointer': ''
      )}
    >
      {src ? (
        <Image
          className={classNames(
            'absolute inset-0 left-1/2 -translate-x-1/2',
            hasEffects ? 'transition md:group-hover:scale-105 md:group-hover:-translate-y-2' : ''
          )}
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
