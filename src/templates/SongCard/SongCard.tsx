import React, { useState } from 'react';
import { AudioCard, Button, TextCard } from '../../components';
import { ITracklist } from '../../interfaces';
import { readFavoriteSongs } from '../../services/localStorage';
import ISongCard from './ISongCard';

export default function SongCard({
  previewUrl,
  trackId,
  trackName,
}: ISongCard) {
  const [isFavorite, setIsFavorite] = useState(
    readFavoriteSongs().some((song: ITracklist) => song.trackId === trackId)
  );

  return (
    <div key={trackId}>
      <TextCard
        as='p'
        className='song-title'
        text={trackName}
      />
      <AudioCard previewUrl={previewUrl} />
      <Button
        className='fav-btn'
        handleClick={() => setIsFavorite(!isFavorite)}
        name={isFavorite ? 'fav' : 'unfav'}
        type='button'
      />
    </div>
  );
}
