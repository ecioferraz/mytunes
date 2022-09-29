import { createContext } from 'react';
import { FavoritesContextType } from './';

const FavoritesContext = createContext<FavoritesContextType | null>(null);

export default FavoritesContext;
