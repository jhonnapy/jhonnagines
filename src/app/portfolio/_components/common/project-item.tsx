import Row from '@/_components/layouts/row';
import Stack from '@/_components/layouts/stack';
import React, { FunctionComponent } from 'react';
import HashTag from './hashtag';
import classNames from 'classnames';
import ProjectImage from './project-image';
import ProjectTitle from './project-title';

type ProjectItemVariants = 'left-image' | 'right-image';

export type ProjectItemProps = {
  onSelectItem: () => void;
  description: string;
  hashtags: string[];
  title: string;
  variant?: ProjectItemVariants;
};

const ProjectItem: FunctionComponent<ProjectItemProps> = ({
  onSelectItem,
  description,
  hashtags,
  title,
  variant = 'left-image',
}) => {
  return (
    <Row
      className={classNames(
        variant === 'left-image' ? 'flex-row' : 'flex-row-reverse'
      )}
    >
      <div onClick={onSelectItem}>
        <ProjectImage />
      </div>
      <Stack
        className={classNames(
          'flex-1 justify-center space-y-4 z-10',
          variant === 'left-image' ? 'ml-8' : 'mr-8 text-right'
        )}
      >
        <div
          className={classNames(
            'cursor-pointer',
            variant === 'left-image' ? '-ml-16' : '-mr-16 text-right'
          )}
          onClick={onSelectItem}
        >
          <ProjectTitle>{title}</ProjectTitle>
        </div>
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

        <span
          onClick={onSelectItem}
          className='text-slate-500 text-sm cursor-pointer'
        >
          learn more...
        </span>
      </Stack>
    </Row>
  );
};

export default ProjectItem;
