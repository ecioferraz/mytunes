import React, { PropsWithChildren, useEffect, useState } from 'react';
import FavoritesContext from '../context/FavoritesContext';
import { ITracklist } from '../interfaces';
import {
  addFavoriteSong,
  readFavoriteSongs,
  removeFavoriteSong,
} from '../services/localStorage';

export default function FavoritesProvider({ children }: PropsWithChildren) {
  const [favorites, setFavorites] = useState<ITracklist[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const getFavorites = () => {
      setIsLoading(true);
      setFavorites(readFavoriteSongs());
      setIsLoading(false);
    };

    getFavorites();
  }, []);

  const saveFavorite = (song: ITracklist) => {
    setIsLoading(true);
    addFavoriteSong(song);
    setFavorites([...favorites, song]);
    setIsLoading(false);
  };

  const removeFavorite = (song: ITracklist) => {
    setIsLoading(true);
    removeFavoriteSong(song);
    setFavorites(favorites.filter((fav) => fav.trackId !== song.trackId));
    setIsLoading(false);
  };

  const context = {
    favorites,
    isLoading,
    removeFavorite,
    saveFavorite,
  };

  return (
    <FavoritesContext.Provider value={context}>
      {children}
    </FavoritesContext.Provider>
  );
}
