import Row from '@/_components/layouts/row';
import Stack from '@/_components/layouts/stack';
import React, { FunctionComponent } from 'react';
import HashTag from './hashtag';
import classNames from 'classnames';

type ProjectItemVariants = 'left-image' | 'right-image';

export type ProjectItemProps = {
  variant?: ProjectItemVariants;
  title: string;
  description: string;
  hashtags: string[];
};

const ProjectItem: FunctionComponent<ProjectItemProps> = ({
  title,
  description,
  hashtags,
  variant = 'left-image',
}) => {
  return (
    <Row
      className={classNames(
        variant === 'left-image' ? 'flex-row' : 'flex-row-reverse'
      )}
    >
      <div className='h-[400px] w-[400px] bg-slate-50 z-0'></div>
      <Stack
        className={classNames(
          'flex-1 justify-center space-y-4 z-10',
          variant === 'left-image' ? 'ml-8' : 'mr-8 text-right'
        )}
      >
        <h3
          className={classNames(
            'lowercase font-semibold text-2xl text-slate-700',
            variant === 'left-image' ? '-ml-16' : '-mr-16 text-right'
          )}
        >
          {title}
        </h3>
        <p className='text-base'>{description}</p>

        <Row
          className={classNames(
            'space-x-2 flex-wrap',
            variant === 'left-image' ? 'text-left' : 'justify-end'
          )}
        >
          {hashtags.map((tag) => (
            <HashTag key={tag}>{tag}</HashTag>
          ))}
        </Row>

        <span className='text-slate-500 text-sm'>learn more...</span>
      </Stack>
    </Row>
  );
};

export default ProjectItem;
