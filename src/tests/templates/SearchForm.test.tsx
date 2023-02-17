import { createRoot, Root } from 'react-dom/client';
import { act } from 'react-dom/test-utils';
import { SearchForm } from '../../templates';

const SEARCH_FORM = 'form[class="search-form"]';
const SEARCH_INPUT = 'input[class="search-input"]';
const SEARCH_BTN = 'button[class="search-btn"]';

describe('Templates', () => {
  let container: HTMLDivElement | null = null;
  let root: Root | null = null;

  beforeAll(() => {
    container = document.createElement('div');
    document.body.appendChild(container);
    root = createRoot(container);
  });

  afterAll(() => act(() => root?.unmount()));

  describe('<SearchForm />', () => {
    let searchForm: HTMLFormElement | null | undefined;

    beforeEach(() => {
      act(() => {
        root?.render(
          <SearchForm
            handleSubmit={() => {
              return;
            }}
            search="test value"
            setSearch={() => {
              return;
            }}
          />,
        );
      });

      searchForm = container?.querySelector(SEARCH_FORM);
    });

    it('should render a <SearchForm />', () => {
      expect(searchForm).toBeTruthy();
      expect(searchForm?.children.length).toBe(2);
    });

    it('should render a search <TextInput />', () => {
      const searchInput = searchForm?.querySelector(SEARCH_INPUT);

      expect(searchInput).toBeTruthy();
      expect(searchInput).toBeInstanceOf(HTMLInputElement);
      expect(searchInput?.getAttribute('placeholder')).toBe(
        'Pesquise um artista ou banda...',
      );
      expect(searchInput?.getAttribute('type')).toBe('search');
      expect(searchInput?.getAttribute('value')).toBe('test value');
    });

    it('should render a submit <Button />', () => {
      const searchBtn = searchForm?.querySelector(SEARCH_BTN);

      expect(searchBtn).toBeTruthy();
      expect(searchBtn).toBeInstanceOf(HTMLButtonElement);
      expect(searchBtn?.getAttribute('name')).toBe('search');
      expect(searchBtn?.getAttribute('type')).toBe('submit');
    });
  });
});
