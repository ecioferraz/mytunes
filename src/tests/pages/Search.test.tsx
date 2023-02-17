import { createRoot, Root } from 'react-dom/client';
import { act } from 'react-dom/test-utils';
import { BrowserRouter } from 'react-router-dom';
import { Search } from '../../pages';

const SEARCH_PAGE = 'main[class="search-page full-screen"]';

describe('Pages', () => {
  let container: HTMLDivElement | null = null;
  let root: Root | null = null;

  beforeAll(() => {
    container = document.createElement('div');
    document.body.appendChild(container);
    root = createRoot(container);
  });

  afterAll(() => act(() => root?.unmount()));

  describe('<Search />', () => {
    let searchPage: HTMLElement | null | undefined;

    beforeEach(() => {
      act(() => {
        root?.render(
          <BrowserRouter>
            <Search />
          </BrowserRouter>,
        );
      });

      searchPage = container?.querySelector(SEARCH_PAGE);
    });

    afterEach(() => {
      searchPage = null;
    });

    it('should render <Search />', () => {
      expect(searchPage).toBeTruthy();
      expect(searchPage?.children.length).toBe(2);
      expect(searchPage?.children[0].className).toBe('search-form');
      expect(searchPage?.children[1].className).toBe('album-library');
    });
  });
});
