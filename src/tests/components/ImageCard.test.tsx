import React from 'react';
import { createRoot, Root } from 'react-dom/client';
import { act } from 'react-dom/test-utils';
import { ImageCard } from '../../components';

describe('Components', () => {
  let container: HTMLDivElement | null = null;
  let root: Root | null = null;

  beforeEach(() => {
    container = document.createElement('div');
    document.body.appendChild(container);
    root = createRoot(container);
  });

  afterEach(() => act(() => root?.unmount()));

  describe('<ImageCard />', () => {
    let imageCard: HTMLDivElement | null | undefined;

    beforeEach(() => {
      act(() => {
        root?.render(
          <ImageCard
            alt='test alt'
            className='test className'
            imageURL='test imageURL'
          />
        );
      });

      imageCard = container?.querySelector('div');
    });

    afterEach(() => {
      imageCard = null;
    });

    it('should render a div', () => {
      expect(imageCard).toBeTruthy();
    });

    it('should render ImageCard\'s properties correctly', () => {
      expect(imageCard?.className).toBe('image-card');
      expect(imageCard?.tagName).toBe('DIV');
      expect(imageCard?.children[0].tagName).toBe('IMG');
      expect(imageCard?.children[0].className).toBe('test className');
      expect(imageCard?.children[0].getAttribute('alt')).toBe('test alt');
      expect(imageCard?.children[0].getAttribute('src')).toBe(
        'test imageURL'
      );
    });
  });
});
