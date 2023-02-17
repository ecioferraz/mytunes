import { useContext, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { AudioCard, Button, TextCard } from '../../components';
import FavoritesContext, { FavoritesContextType } from '../../context';
import { Tracklist } from '../../types';
import shortenName from '../../utils/shortenName';
import SongCardProps from './SongCard.props';

export default function SongCard({ song }: SongCardProps) {
  const { pathname } = useLocation();
  const { favorites, removeFavorite, saveFavorite } = useContext(
    FavoritesContext,
  ) as FavoritesContextType;
  const [isFavorite, setIsFavorite] = useState(
    favorites.some((s: Tracklist) => s.trackId === song.trackId),
  );

  const { artistName, previewUrl, trackId, trackName } = song;

  const handleFav = () => {
    isFavorite ? removeFavorite(song) : saveFavorite(song);
    setIsFavorite(!isFavorite);
  };

  const handleText = () => {
    return pathname.includes('/favorites')
      ? `${shortenName(artistName)} - ${shortenName(trackName)}`
      : trackName;
  };

  return (
    <div key={trackId}>
      <TextCard as="p" className="song-title" text={handleText()} />
      <section className="audio-container">
        <AudioCard previewUrl={previewUrl} />
        <Button
          className="fav-btn"
          handleClick={handleFav}
          name={isFavorite ? 'fav' : 'unfav'}
          type="button"
        />
      </section>
    </div>
  );
}
