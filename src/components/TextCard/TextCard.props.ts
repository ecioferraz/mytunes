import { ElementType, HTMLAttributes } from 'react';

type TextCardProps = {
  as?: ElementType;
  className: string;
  text: string;
} & HTMLAttributes<HTMLOrSVGElement>;

export default TextCardProps;
