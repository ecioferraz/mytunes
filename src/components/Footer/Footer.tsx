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
      {/* <a href="https://www.vecteezy.com/free-vector/geometric-background">Geometric Background Vectors by Vecteezy</a>
      <a href="https://www.vecteezy.com/free-photos">Free Stock photos by Vecteezy</a>
      <a href="https://www.vecteezy.com/free-photos">Free Stock photos by Vecteezy</a> { 'yellow background earphones plant' && 'headphones on monitor grey background' }
      <a href='https://www.freepik.com/photos/background'>Background photo created by benzoix - www.freepik.com</a> { 'black girl yellow background' }
      <a href='https://www.freepik.com/photos/music'>Music photo created by benzoix - www.freepik.com</a> { 'asian girl in pink phone on hand headphones yellow background' }
      <a href='https://www.freepik.com/photos/music'>Music photo created by freepik - www.freepik.com</a> { 'asian girl hands on headphones pink background' }
      <a href='https://www.freepik.com/photos/music'>Music photo created by lookstudio - www.freepik.com</a> { 'white girl yellow shirt pink background headphones' }
      <a href='https://www.freepik.com/photos/music'>Music photo created by prostooleh - www.freepik.com</a> { 'girl red background' } */}
    </footer>
  );
}
