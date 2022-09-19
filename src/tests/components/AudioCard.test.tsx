import React from 'react';
import { createRoot, Root } from 'react-dom/client';
import { act } from 'react-dom/test-utils';
import { AudioCard } from '../../components';

describe('Components', () => {
  let container: HTMLDivElement | null = null;
  let root: Root | null = null;

  beforeEach(() => {
    container = document.createElement('div');
    document.body.appendChild(container);
    root = createRoot(container);
  });

  afterEach(() => act(() => root?.unmount()));

  describe('<AudioCard />', () => {
    let audioCard: HTMLAudioElement | null | undefined;

    beforeEach(() => {
      act(() => {
        root?.render(
          <AudioCard
            previewUrl='test previewUrl'
          />
        );
      });

      audioCard = container?.querySelector('audio');
    });

    afterEach(() => {
      audioCard = null;
    });

    it('should render a audio element', () => {
      expect(audioCard).toBeTruthy();
    });

    it('should render audioCard\'s properties correctly', () => {
      expect(audioCard?.className).toBe('audio-player');
      expect(audioCard).toHaveAttribute('controls');
      expect(audioCard?.getAttribute('src')).toBe('test previewUrl');
    });
  });
});
