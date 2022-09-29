import React, { PropsWithChildren, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import FavoritesContext from '../context/FavoritesContext';
import { ITracklist } from '../interfaces';
import {
  addFavoriteSong,
  readFavoriteSongs,
  readUser,
  removeFavoriteSong,
} from '../services/localStorage';

export default function FavoritesProvider({ children }: PropsWithChildren) {
  const navigate = useNavigate();
  const [favorites, setFavorites] = useState<ITracklist[]>([]);

  useEffect(() => {
    if (!readUser()) navigate('/login');
  }, []);

  useEffect(() => {
    setFavorites(readFavoriteSongs());
  }, []);

  const saveFavorite = (song: ITracklist) => {
    addFavoriteSong(song);
    setFavorites([...favorites, song]);
  };

  const removeFavorite = (song: ITracklist) => {
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
