import { MouseEventHandler } from 'react';

type ButtonProps = {
  className: string;
  disabled?: boolean;
  handleClick?: MouseEventHandler<HTMLButtonElement>;
  name: string;
  type: 'button' | 'submit';
};

export default ButtonProps;
