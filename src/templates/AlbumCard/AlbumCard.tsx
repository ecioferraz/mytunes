import React from 'react';
import { Link } from 'react-router-dom';
import { ImageCard, TextCard } from '../../components';
import { IAlbumCard } from './';

export default function AlbumCard({
  artistName,
  artworkUrl100,
  collectionId,
  collectionName,
}: IAlbumCard) {
  return (
    <div className='album-card'>
      <Link to={`/album/${collectionId}`}>
        <ImageCard
          alt={`Capa do álbum ${collectionName}.`}
          className='album-image'
          imageURL={artworkUrl100}
        />
        <div>
          <TextCard as='h1' className='album-title' text={collectionName} />
          <TextCard as='h2' className='artist-name' text={artistName} />
        </div>
      </Link>
    </div>
  );
}
