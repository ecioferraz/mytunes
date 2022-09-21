import { ITracklist } from '../interfaces';

type FavoritesContextType = {
  favorites: ITracklist[];
  isLoading: boolean;
  saveFavorite: (song: ITracklist) => void;
  removeFavorite: (song: ITracklist) => void;
};

export default FavoritesContextType;
