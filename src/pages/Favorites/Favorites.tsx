import React from 'react';
import { Footer } from '../../components';
import { FavoritesCard } from '../../templates';

import './styles.css';

export default function Favorites() {
  return (
    <>
      <main className='favorites-page'>
        <FavoritesCard />
      </main>
      <Footer
        author="Vecteezy"
        href="https://www.vecteezy.com/free-photos"
        tag="Free Stock"
      />
    </>
  );
}
