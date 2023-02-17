import { Tracklist } from '../types';

type FavoritesContextType = {
  favorites: Tracklist[];
  saveFavorite: (song: Tracklist) => void;
  removeFavorite: (song: Tracklist) => void;
};

export default FavoritesContextType;
