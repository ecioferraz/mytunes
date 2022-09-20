import React, { useState } from 'react';
import { AudioCard, Button, TextCard } from '../../components';
import { ITracklist } from '../../interfaces';
import {
  addFavoriteSong,
  readFavoriteSongs,
  removeFavoriteSong,
} from '../../services/localStorage';
import ISongCard from './ISongCard';

export default function SongCard({ song }: ISongCard) {
  const [isFavorite, setIsFavorite] = useState(
    readFavoriteSongs().some((s: ITracklist) => s.trackId === song.trackId)
  );

  const { previewUrl, trackId, trackName } = song;

  const handleFav = () => {
    isFavorite ? removeFavoriteSong(song) : addFavoriteSong(song);
    setIsFavorite(!isFavorite);
  };

  return (
    <div key={trackId}>
      <TextCard as='p' className='song-title' text={trackName} />
      <AudioCard previewUrl={previewUrl} />
      <Button
        className='fav-btn'
        handleClick={handleFav}
        name={isFavorite ? 'fav' : 'unfav'}
        type='button'
      />
    </div>
  );
}
