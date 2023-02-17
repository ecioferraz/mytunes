import { PropsWithChildren, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import FavoritesContext from '../context/FavoritesContext';
import {
  addFavoriteSong,
  readFavoriteSongs,
  readUser,
  removeFavoriteSong,
} from '../services/localStorage';
import { Tracklist } from '../types';

export default function FavoritesProvider({ children }: PropsWithChildren) {
  const navigate = useNavigate();
  const [favorites, setFavorites] = useState<Tracklist[]>([]);

  useEffect(() => {
    if (!readUser()) navigate('/login');
  }, []);

  useEffect(() => {
    setFavorites(readFavoriteSongs());
  }, []);

  const saveFavorite = (song: Tracklist) => {
    addFavoriteSong(song);
    setFavorites([...favorites, song]);
  };

  const removeFavorite = (song: Tracklist) => {
    removeFavoriteSong(song);
    setFavorites(favorites.filter((fav) => fav.trackId !== song.trackId));
  };

  const context = {
    favorites,
    removeFavorite,
    saveFavorite,
  };

  return (
    <FavoritesContext.Provider value={context}>
      {children}
    </FavoritesContext.Provider>
  );
}
