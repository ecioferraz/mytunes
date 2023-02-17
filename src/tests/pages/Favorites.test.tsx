import { createRoot, Root } from 'react-dom/client';
import { act } from 'react-dom/test-utils';
import { BrowserRouter } from 'react-router-dom';
import { Favorites } from '../../pages';
import FavoritesContext from '../../context';
import { emptyFavsMock } from '../templates/mocks/favoritesMocks';

const FAVORITES_PAGE = 'main[class="favorites-page"]';

describe('Pages', () => {
  let container: HTMLDivElement | null = null;
  let root: Root | null = null;

  beforeAll(() => {
    container = document.createElement('div');
    document.body.appendChild(container);
    root = createRoot(container);
  });

  afterAll(() => act(() => root?.unmount()));

  describe('<Favorites />', () => {
    let favoritesPage: HTMLElement | null | undefined;

    beforeEach(() => {
      act(() => {
        root?.render(
          <BrowserRouter>
            <FavoritesContext.Provider value={emptyFavsMock}>
              <Favorites />
            </FavoritesContext.Provider>
          </BrowserRouter>,
        );
      });

      favoritesPage = container?.querySelector(FAVORITES_PAGE);
    });

    afterEach(() => {
      favoritesPage = null;
    });

    it('should render <Favorites />', () => {
      expect(favoritesPage).toBeTruthy();
      expect(favoritesPage?.children.length).toBe(1);
      expect(favoritesPage?.children[0].className).toBe('favorites-card');
    });
  });
});
