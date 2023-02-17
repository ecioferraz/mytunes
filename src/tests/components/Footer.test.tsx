import { createRoot, Root } from 'react-dom/client';
import { act } from 'react-dom/test-utils';
import { Footer } from '../../components';

describe('Components', () => {
  let container: HTMLDivElement | null = null;
  let root: Root | null = null;

  beforeEach(() => {
    container = document.createElement('div');
    document.body.appendChild(container);
    root = createRoot(container);
  });

  afterEach(() => act(() => root?.unmount()));

  describe('<Footer />', () => {
    let footer: HTMLElement | null | undefined;

    describe('as freepik source', () => {
      beforeEach(() => {
        act(() => {
          root?.render(
            <Footer
              author="test author"
              href="test freepik source"
              tag="test tag"
            />,
          );
        });

        footer = container?.querySelector('footer');
      });

      afterEach(() => {
        footer = null;
      });

      it('should render a footer', () => {
        expect(footer).toBeTruthy();
      });

      it("should render footer's properties correctly", () => {
        expect(footer?.tagName).toBe('FOOTER');
        expect(footer?.children.length).toBe(1);
        expect(footer?.children[0].getAttribute('href')).toBe(
          'test freepik source',
        );
        expect(footer?.children[0].innerHTML).toBe(
          'test tag photo created by test author - www.freepik.com',
        );
      });
    });

    describe('not as freepik source', () => {
      beforeEach(() => {
        act(() => {
          root?.render(
            <Footer author="test author" href="test source" tag="test tag" />,
          );
        });

        footer = container?.querySelector('footer');
      });

      afterEach(() => {
        footer = null;
      });

      it('should render a footer', () => {
        expect(footer).toBeTruthy();
      });

      it("should render footer's properties correctly", () => {
        expect(footer?.tagName).toBe('FOOTER');
        expect(footer?.children.length).toBe(1);
        expect(footer?.children[0].getAttribute('href')).toBe('test source');
        expect(footer?.children[0].innerHTML).toBe(
          'test tag photos by test author',
        );
      });
    });
  });
});
