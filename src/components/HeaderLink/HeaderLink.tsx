import React from 'react';
import { Link } from 'react-router-dom';
import IHeaderLink from './IHeaderLink';

export default function HeaderLink({
  className,
  name,
  path = '',
}: IHeaderLink) {
  return (
    <Link to={`/${path}`} className={className}>
      {name}
    </Link>
  );
}
