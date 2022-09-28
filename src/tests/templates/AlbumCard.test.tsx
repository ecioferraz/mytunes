import React from 'react';
import { createRoot, Root } from 'react-dom/client';
import { act } from 'react-dom/test-utils';
import { BrowserRouter } from 'react-router-dom';
import { AlbumCard } from '../../templates';

const ALBUM_CARD = 'a[class="album-card"]';
const ALBUM_IMAGE = 'img[class="album-image"]';
const ALBUM_TITLE = 'h1[class="album-title"]';
const ARTIST_NAME = 'h2[class="artist-name"]';

describe('Templates', () => {
  let container: HTMLDivElement | null = null;
  let root: Root | null = null;

  beforeAll(() => {
    container = document.createElement('div');
    document.body.appendChild(container);
    root = createRoot(container);
  });

  afterAll(() => act(() => root?.unmount()));

  describe('<AlbumCard />', () => {
    let albumCard: HTMLAnchorElement | null | undefined;

    beforeEach(() => {
      act(() => {
        root?.render(
          <BrowserRouter>
            <AlbumCard
              artistName='test artistName'
              artworkUrl100='test artworkUrl100'
              collectionId={0}
              collectionName='test collectionName'
            />
          </BrowserRouter>
        );
      });

      albumCard = container?.querySelector(ALBUM_CARD);
    });

    it('should render a <AlbumCard />', () => {
      expect(albumCard).toBeTruthy();
      expect(albumCard?.children.length).toBe(3);
      expect(albumCard?.getAttribute('href')).toBe('/album/0');
    });

    it('should render a <ImageCard /> for the app logo', () => {
      const albumImage = albumCard?.querySelector(ALBUM_IMAGE);

      expect(albumImage).toBeTruthy();
      expect(albumImage).toBeInstanceOf(HTMLImageElement);
      expect(albumImage?.getAttribute('alt')).toBe(
        'Capa do álbum test collectionName.'
      );
      expect(albumImage?.getAttribute('src')).toBe('test artworkUrl100');
    });

    it('should render a <TextCard /> for the album\'s title', () => {
      const albumTitle = albumCard?.querySelector(ALBUM_TITLE);

      expect(albumTitle).toBeTruthy();
      expect(albumTitle).toBeInstanceOf(HTMLHeadingElement);
      expect(albumTitle?.innerHTML).toBe('test collectionName');
    });

    it('should render a <TextCard /> for the artist\'s name', () => {
      const artistName = albumCard?.querySelector(ARTIST_NAME);

      expect(artistName).toBeTruthy();
      expect(artistName).toBeInstanceOf(HTMLHeadingElement);
      expect(artistName?.innerHTML).toBe('test artistName');
    });
  });
});
