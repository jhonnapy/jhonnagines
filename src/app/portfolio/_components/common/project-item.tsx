'use client';
import Row from '@/_components/layouts/row';
import Stack from '@/_components/layouts/stack';
import React, {
  FunctionComponent,
  createContext,
  useContext,
  useState,
} from 'react';
import HashTag from './hashtag';
import classNames from 'classnames';
import ProjectImage from './project-image';
import ProjectTitle from './project-title';
import ProjectDetailsModal from '../modals/project-detail-modal';
import { IPortfolioItem } from '../../_contentful';

type ProjectItemVariants = 'left-image' | 'right-image';

export type ProjectItemProps = {
  project: IPortfolioItem;
  variant?: ProjectItemVariants;
};

const ProjectItemContext = createContext<IPortfolioItem>({
  name: '',
  content: '',
  description: '',
  image: {
    url: '',
  },
  tags: [],
});
export const useProjectItemContext = () => useContext(ProjectItemContext);

const ProjectItem: FunctionComponent<ProjectItemProps> = ({
  project,
  variant = 'left-image',
}) => {
  const [openDetails, setOpenDetails] = useState(false);

  const handleOpenDetails = () => setOpenDetails(true);
  const handleCloseDetails = () => setOpenDetails(false);

  return (
    <ProjectItemContext.Provider value={project}>
      <div>
        <Row
          className={classNames(
            variant === 'left-image' ? 'flex-row' : 'flex-row-reverse'
          )}
        >
          <div className='relative p-3' onClick={handleOpenDetails}>
            <div className='absolute top-0 left-0 w-5/6 h-2/6 border-t border-l border-slate-400 pointer-events-none'></div>
            <ProjectImage alt={project.name} src={project.image?.url} />
            <div className='absolute bottom-0 right-0 w-5/6 h-2/6 border-b border-r border-slate-400 pointer-events-none'></div>
          </div>
          <Stack
            className={classNames(
              'flex-1 justify-center space-y-4 z-10',
              variant === 'left-image' ? 'ml-8' : 'mr-8 text-right'
            )}
          >
            <div
              className={classNames(
                // 'cursor-pointer',
                variant === 'left-image' ? '-ml-16' : '-mr-16 text-right'
              )}
              // onClick={handleOpenDetails}
            >
              <ProjectTitle>{project.name}</ProjectTitle>
            </div>
            <p className='text-base text-slate-500'>{project.description}</p>

            <div>
              <button
                className='text-left text-sm font-medium text-slate-600 md:hover:text-red-400 md:hover:scale-[1.02] italic'
                onClick={handleOpenDetails}
              >
                SEE MORE &gt;
              </button>
            </div>
            {/* <Row
              className={classNames(
                'space-x-2 flex-wrap',
                variant === 'left-image' ? 'text-left' : 'justify-end'
              )}
            >
              {project.tags.map((tag) => (
                <HashTag key={tag}>{tag}</HashTag>
              ))}
            </Row> */}

            {/* <span
              onClick={handleOpenDetails}
              className='text-slate-500 text-sm cursor-pointer'
            >
              learn more...
            </span> */}
          </Stack>
        </Row>

        <ProjectDetailsModal
          isOpen={openDetails}
          onClose={handleCloseDetails}
        />
      </div>
    </ProjectItemContext.Provider>
  );
};

export default ProjectItem;
