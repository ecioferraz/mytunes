import React from 'react';
import { createRoot, Root } from 'react-dom/client';
import { act } from 'react-dom/test-utils';
import { BrowserRouter } from 'react-router-dom';
import { HeaderLink } from '../../components';

describe('Components', () => {
  let container: HTMLDivElement | null = null;
  let root: Root | null = null;
  
  beforeAll(() => {
    container = document.createElement('div');
    document.body.appendChild(container);
    root = createRoot(container);
  });
  
  afterAll(() => act(() => root?.unmount()));
  
  describe('<RedirectLink />', () => {
    let headerLink: HTMLLinkElement | null | undefined;
    
    beforeEach(() => {
      act(() => {
        root?.render(
          <BrowserRouter>
            <HeaderLink
              className='test className'
              name='test name'
            />
          </BrowserRouter>
        );
      });

      headerLink = container?.querySelector('.test');
    });

    it('should render a link', () => {
      expect(headerLink).toBeTruthy();
    });

    it('should render HeaderLink\'s properties correctly', () => {
      expect(headerLink?.getAttribute('class')).toBe('test className');
      expect(headerLink?.getAttribute('href')).toBe('/');
    });

    it('should render HeaderLink\'s inner text correctly', () => {
      expect(headerLink?.textContent).toBe('test name');
    });
  });
});
