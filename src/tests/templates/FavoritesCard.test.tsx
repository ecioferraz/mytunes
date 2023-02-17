import { createRoot, Root } from 'react-dom/client';
import { act } from 'react-dom/test-utils';
import { BrowserRouter } from 'react-router-dom';
import FavoritesContext from '../../context';
import { FavoritesCard } from '../../templates';
import { emptyFavsMock, filledFavsMock } from './mocks/favoritesMocks';

const FAVORITES_CARD = 'div[class="favorites-card"]';
const FAVORITES_TITLE = 'h1[class="favorites-title"]';
const NO_FAVORITES_MSG = 'p[class="no-favorites"]';

describe('Templates', () => {
  let container: HTMLDivElement | null = null;
  let root: Root | null = null;

  beforeAll(() => {
    container = document.createElement('div');
    document.body.appendChild(container);
    root = createRoot(container);
  });

  afterAll(() => act(() => root?.unmount()));

  describe('<FavoritesCard />', () => {
    let favoritesCard: HTMLDivElement | null | undefined;

    describe('as no favorites', () => {
      beforeEach(() => {
        act(() => {
          root?.render(
            <BrowserRouter>
              <FavoritesContext.Provider value={emptyFavsMock}>
                <FavoritesCard />
              </FavoritesContext.Provider>
            </BrowserRouter>,
          );
        });

        favoritesCard = container?.querySelector(FAVORITES_CARD);
      });

      it('should render a <FavoritesCard />', () => {
        expect(favoritesCard).toBeTruthy();
        expect(favoritesCard?.children.length).toBe(2);
      });

      it('should render a <TextCard /> as heading', () => {
        const favoritesTitle = favoritesCard?.querySelector(FAVORITES_TITLE);

        expect(favoritesTitle).toBeTruthy();
        expect(favoritesTitle).toBeInstanceOf(HTMLHeadingElement);
        expect(favoritesTitle?.innerHTML).toBe('Favoritas');
      });

      it('should render a <TextCard /> for the no favorites message', () => {
        const noFavoritesMessage =
          favoritesCard?.querySelector(NO_FAVORITES_MSG);

        expect(noFavoritesMessage).toBeTruthy();
        expect(noFavoritesMessage).toBeInstanceOf(HTMLParagraphElement);
        expect(noFavoritesMessage?.innerHTML).toBe('Nenhuma faixa salva.');
      });
    });

    describe('as no favorites', () => {
      beforeEach(() => {
        act(() => {
          root?.render(
            <BrowserRouter>
              <FavoritesContext.Provider value={filledFavsMock}>
                <FavoritesCard />
              </FavoritesContext.Provider>
            </BrowserRouter>,
          );
        });

        favoritesCard = container?.querySelector(FAVORITES_CARD);
      });

      it('should render a <FavoritesCard />', () => {
        expect(favoritesCard).toBeTruthy();
        expect(favoritesCard?.children.length).toBe(2);
      });

      it('should render a <TextCard /> as heading', () => {
        const favoritesTitle = favoritesCard?.querySelector(FAVORITES_TITLE);

        expect(favoritesTitle).toBeTruthy();
        expect(favoritesTitle).toBeInstanceOf(HTMLHeadingElement);
        expect(favoritesTitle?.innerHTML).toBe('Favoritas');
      });

      it('should render a <SongCard /> map of all favorited songs', () => {
        const songCard = favoritesCard?.querySelector('div');

        expect(songCard).toBeTruthy();
        expect(songCard?.children.length).toBe(2);
        expect(songCard?.children[0]).toBeInstanceOf(HTMLParagraphElement);
        expect(songCard?.children[1].className).toBe('audio-container');
      });
    });
  });
});
