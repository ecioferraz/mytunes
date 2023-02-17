import { Link } from 'react-router-dom';
import HeaderLinkProps from './HeaderLink.props';

export default function HeaderLink({
  className,
  name,
  path = '',
}: HeaderLinkProps) {
  return (
    <Link to={`/${path}`} className={className}>
      {name}
    </Link>
  );
}
