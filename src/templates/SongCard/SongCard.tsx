import React, { useContext, useState } from 'react';
import { AudioCard, Button, TextCard } from '../../components';
import FavoritesContext, { FavoritesContextType } from '../../context';
import { ITracklist } from '../../interfaces';
import ISongCard from './ISongCard';

export default function SongCard({ song }: ISongCard) {
  const { favorites, removeFavorite, saveFavorite } = useContext(
    FavoritesContext
  ) as FavoritesContextType;
  const [isFavorite, setIsFavorite] = useState(
    favorites.some((s: ITracklist) => s.trackId === song.trackId)
  );

  const { previewUrl, trackId, trackName } = song;

  const handleFav = () => {
    isFavorite ? removeFavorite(song) : saveFavorite(song);
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
