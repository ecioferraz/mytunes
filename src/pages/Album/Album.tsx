import React from 'react';
import { Footer } from '../../components';
import { TracklistCard } from '../../templates';

import './styles.css';

export default function Album() {
  return (
    <>
      <main className='album-page'>
        <TracklistCard />
      </main>
      <Footer
        author="prostooleh"
        className="image-credit left"
        href="https://www.freepik.com/photos/music"
        tag="Music"
      />
    </>
  );
}
