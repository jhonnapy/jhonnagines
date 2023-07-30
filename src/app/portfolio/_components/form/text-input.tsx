import React, {
  FunctionComponent,
  InputHTMLAttributes,
} from 'react';

export type TextInputProps = {
  // No Props
} & InputHTMLAttributes<HTMLInputElement>;

const TextInput: FunctionComponent<TextInputProps> = (props) => {
  return (
    <input
      {...props}
      className='transition focus:outline-none bg-inherit border-b border-slate-400 focus:border-[#D64545] px-3 py-2'
    />
  );
};

export default TextInput;
