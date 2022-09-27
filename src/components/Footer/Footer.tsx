/* eslint-disable max-len */
import React from 'react';
import IFooter from './IFooter';

export default function Footer({ author, href, tag }: IFooter) {
  return (
    <footer>
      {href.includes('freepik') ? (
        <a href={href}>
          {tag} photo created by {author} - www.freepik.com
        </a>
      ) : (
        <a href={href}>
          {tag} photos by {author}
        </a>
      )}
    </footer>
  );
}
