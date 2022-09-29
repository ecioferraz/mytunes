import { ITracklist } from '../interfaces';

type FavoritesContextType = {
  favorites: ITracklist[];
  saveFavorite: (song: ITracklist) => void;
  removeFavorite: (song: ITracklist) => void;
};

export default FavoritesContextType;
