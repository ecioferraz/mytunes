import { Footer } from '../../components';
import { TracklistCard } from '../../templates';

import './styles.css';

export default function Album() {
  return (
    <>
      <main className="album-page">
        <TracklistCard />
      </main>
      <Footer
        author="prostooleh"
        href="https://www.freepik.com/photos/music"
        tag="Music"
      />
    </>
  );
}
