import React, { FunctionComponent } from 'react';
import { ReactMarkdown } from 'react-markdown/lib/react-markdown';
import remarkGfm from 'remark-gfm';
import AppHeading from '../common/app-heading';
import CodeBlock from './code-block';

export type AppReactMarkdownProps = {
  children: React.ReactNode;
} & React.ComponentProps<typeof ReactMarkdown>;

const AppReactMarkdown: FunctionComponent<AppReactMarkdownProps> = ({
  children,
}) => {
  return (
    <ReactMarkdown
      components={{
        h2: ({ children }) => <AppHeading.H2>{children}</AppHeading.H2>,
        h3: ({ children }) => <AppHeading.H3>{children}</AppHeading.H3>,
        p: ({ children }) => <p className='text-slate-700'>{children}</p>,
        li: ({ children }) => <li className='text-slate-700'>{children}</li>,
        strong: ({ children }) => (
          <strong className='font-semibold'>{children}</strong>
        ),
        pre: ({ children }) => <>{children}</>,
        code: ({ children, className }) => (
          <CodeBlock className={className || ''}>{children}</CodeBlock>
        ),
      }}
      className='line-break'
    >
      {children}
    </ReactMarkdown>
  );
};

export default AppReactMarkdown;
