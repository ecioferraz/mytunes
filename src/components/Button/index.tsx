import ButtonProps from './Button.props';
import { AiFillHeart, AiOutlineHeart, AiOutlineSearch } from 'react-icons/ai';

export default function Button({
  className,
  disabled,
  handleClick,
  name,
  type,
}: ButtonProps) {
  const handleButtonName = () => {
    switch (name) {
      case 'fav':
        return <AiFillHeart color="#EB5353" name="fav" />;
      case 'unfav':
        return <AiOutlineHeart name="unfav" />;
      case 'search':
        return <AiOutlineSearch name="search" className="ai" />;
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
