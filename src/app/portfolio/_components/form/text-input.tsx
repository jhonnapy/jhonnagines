import React, {
  FunctionComponent,
  HtmlHTMLAttributes,
  InputHTMLAttributes,
} from 'react';

export type TextInputProps = {
  // No Props
} & InputHTMLAttributes<HTMLInputElement>;

const TextInput: FunctionComponent<TextInputProps> = (props) => {
  return (
    <input
      {...props}
      className='transition focus:outline-none bg-inherit border-b border-slate-400 focus:border-b-2 focus:border-blue-600 px-3 py-2'
    />
  );
};

export default TextInput;
