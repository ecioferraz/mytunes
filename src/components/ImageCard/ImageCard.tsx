import React from 'react';
import IImageCard from './IImageCard';

export default function ImageCard({ alt, className, imageURL }: IImageCard) {
  return (
    <div className='image-card'>
      <img
        alt={alt}
        src={imageURL}
        className={className}
      />
    </div>
  );
}
