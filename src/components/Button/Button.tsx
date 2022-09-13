import React from 'react';
import IButton from './IButton';
import {
  AiFillHeart,
  AiOutlineHeart,
  AiOutlineSearch,
} from 'react-icons/ai';

export default function Button({
  className,
  disabled,
  handleClick,
  name,
  type,
}: IButton) {
  const handleButtonName = () => {
    switch (name) {
    case 'fav':
      return <AiFillHeart color='#CC3636' />;
    case 'unfav':
      return <AiOutlineHeart />;
    case 'search':
      return <AiOutlineSearch />;
    default:
      return name;
    }
  };
  
  return (
    <button
      className={className}
      disabled={disabled}
      name={name}
      onClick={handleClick}
      type={type}
    >
      {handleButtonName()}
    </button>
  );
}
