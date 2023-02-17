import { ChangeEvent } from 'react';

interface TextInputProps {
  className: string;
  handleChange: (event: ChangeEvent<HTMLInputElement>) => void;
  minLength?: string;
  name: string;
  placeholder: string;
  type: string;
  value: string;
}

export default TextInputProps;
