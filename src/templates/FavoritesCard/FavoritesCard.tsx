import React, { useContext } from 'react';
import { TextCard } from '../../components';
import FavoritesContext, { FavoritesContextType } from '../../context';
import SongCard from '../SongCard';

export default function FavoritesCard() {
  const { favorites } = useContext(FavoritesContext) as FavoritesContextType;

  return (
    <div>
      <TextCard as='h1' className='favorites-title' text='Favoritas' />
      <section>
        {!favorites ? (
          <TextCard
            as='p'
            className='no-favorites'
            text='Nenhuma faixa salva.'
          />
        ) : (
          favorites.map((song) => <SongCard key={song.trackId} song={song} />)
        )}
      </section>
    </div>
  );
}
