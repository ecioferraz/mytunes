import { fireEvent } from '@testing-library/react';
import React from 'react';
import { createRoot, Root } from 'react-dom/client';
import { act } from 'react-dom/test-utils';
import { BrowserRouter } from 'react-router-dom';
import FavoritesContext from '../../context';
import { SongCard } from '../../templates';
import { emptyFavsMock, songMock } from './mocks/favoritesMocks';

const SONG_TITLE = 'p[class="song-title"]';
const AUDIO_CARD = 'audio[class="audio-player"]';
const FAV_BTN = 'button[class="fav-btn"]';

describe('Templates', () => {
  let container: HTMLDivElement | null = null;
  let root: Root | null = null;

  beforeAll(() => {
    container = document.createElement('div');
    document.body.appendChild(container);
    root = createRoot(container);
  });

  afterAll(() => act(() => root?.unmount()));

  describe('<SongCard />', () => {
    let songCard: HTMLDivElement | null | undefined;

    beforeEach(() => {
      act(() => {
        root?.render(
          <BrowserRouter>
            <FavoritesContext.Provider value={emptyFavsMock}>
              <SongCard song={songMock} />
            </FavoritesContext.Provider>
          </BrowserRouter>
        );
      });

      songCard = container?.querySelector('div');
    });

    it('should render a <SongCard />', () => {
      expect(songCard).toBeTruthy();
      expect(songCard?.children.length).toBe(2);
    });

    it('should render a <TextCard /> for the song title', () => {
      const songTitle = songCard?.querySelector(SONG_TITLE);

      expect(songTitle).toBeTruthy();
      expect(songTitle).toBeInstanceOf(HTMLParagraphElement);
      expect(songTitle?.innerHTML).toBe('trackName');
    });

    it('should render a <AudioCard />', () => {
      const audioCard = songCard?.querySelector(AUDIO_CARD);

      expect(audioCard).toBeTruthy();
      expect(audioCard).toBeInstanceOf(HTMLAudioElement);
      expect(audioCard?.getAttribute('src')).toBe('previewUrl');
    });

    it('should render a functioning favorite toggle <Button />', () => {
      const favBtn = songCard?.querySelector(FAV_BTN);

      expect(favBtn).toBeTruthy();
      expect(favBtn).toBeInstanceOf(HTMLButtonElement);
      expect(favBtn?.getAttribute('type')).toBe('button');
      expect(favBtn?.getAttribute('name')).toBe('unfav');

      fireEvent.click(favBtn as HTMLButtonElement);

      expect(favBtn?.getAttribute('name')).toBe('fav');

      fireEvent.click(favBtn as HTMLButtonElement);

      expect(favBtn?.getAttribute('name')).toBe('unfav');
    });
  });
});
