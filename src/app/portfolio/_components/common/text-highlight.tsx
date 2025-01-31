import React, { FunctionComponent, HtmlHTMLAttributes } from 'react';

export type TextHighlightProps = {
  // No Props
} & HtmlHTMLAttributes<HTMLSpanElement>;

const TextHighlight: FunctionComponent<TextHighlightProps> = (props) => {
  return <span {...props} className='font-semibold'></span>;
};

export default TextHighlight;
