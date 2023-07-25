import React, { ButtonHTMLAttributes, FunctionComponent } from 'react';

type Variants = 'default' | 'secondary';

export type CTAButtonProps = {
  variant?: Variants;
} & ButtonHTMLAttributes<HTMLButtonElement>;

const CTAButton: FunctionComponent<CTAButtonProps> = (props) => {
  return <button {...props}></button>;
};

export default CTAButton;
