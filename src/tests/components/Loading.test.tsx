import { createRoot, Root } from 'react-dom/client';
import { act } from 'react-dom/test-utils';
import { Loading } from '../../components';

describe('Components', () => {
  let container: HTMLDivElement | null = null;
  let root: Root | null = null;

  beforeEach(() => {
    container = document.createElement('div');
    document.body.appendChild(container);
    root = createRoot(container);
  });

  afterEach(() => act(() => root?.unmount()));

  describe('<Loading />', () => {
    let loading: HTMLElement | null | undefined;

    beforeEach(() => {
      act(() => {
        root?.render(<Loading />);
      });

      loading = container?.querySelector('section');
    });

    afterEach(() => {
      loading = null;
    });

    it('should render a section element', () => {
      expect(loading).toBeTruthy();
    });

    it("should render Loading's properties correctly", () => {
      expect(loading?.className).toBe('loading');
      expect(loading?.children.length).toBe(1);
      expect(loading?.children[0].className).toBe('lds-roller');
      expect(loading?.children[0].children.length).toBe(8);
    });
  });
});
