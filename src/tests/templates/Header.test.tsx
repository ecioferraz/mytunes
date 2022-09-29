import React from 'react';
import { createRoot, Root } from 'react-dom/client';
import { act } from 'react-dom/test-utils';
import { BrowserRouter } from 'react-router-dom';
import { Header } from '../../templates';

const APP_LOGO = 'h1[class="mytunes-title"]';
const SEARCH_LINK = 'a[class="search-link"]';
const FAVORITES_LINK = 'a[class="favorites-link"]';
const LOGOUT_BTN = 'button[class="logout-btn"]';

describe('Templates', () => {
  let container: HTMLDivElement | null = null;
  let root: Root | null = null;

  beforeAll(() => {
    container = document.createElement('div');
    document.body.appendChild(container);
    root = createRoot(container);
  });

  afterAll(() => act(() => root?.unmount()));

  describe('<Header />', () => {
    let header: HTMLHeadElement | null | undefined;

    beforeEach(() => {
      act(() => {
        root?.render(
          <BrowserRouter>
            <Header />
          </BrowserRouter>
        );
      });

      header = container?.querySelector('header');
    });

    it('should render a <Header />', () => {
      expect(header).toBeTruthy();
      expect(header?.children.length).toBe(3);
    });

    it('should render a <TextCard /> for the app logo', () => {
      const appLogo = header?.querySelector(APP_LOGO);

      expect(appLogo).toBeTruthy();
      expect(appLogo).toBeInstanceOf(HTMLHeadingElement);
      expect(appLogo?.innerHTML).toBe('myTunes');
    });

    it('should render a <HeaderLink /> for the search page', () => {
      const homeLink = header?.querySelector(SEARCH_LINK);

      expect(homeLink).toBeTruthy();
      expect(homeLink).toBeInstanceOf(HTMLAnchorElement);
    });

    it('should render a <HeaderLink /> for the favorites page', () => {
      const favoritesLink = header?.querySelector(FAVORITES_LINK);

      expect(favoritesLink).toBeTruthy();
      expect(favoritesLink).toBeInstanceOf(HTMLAnchorElement);
    });

    it('should render a logout <Button />', () => {
      const logoutBtn = header?.querySelector(LOGOUT_BTN);

      expect(logoutBtn).toBeTruthy();
      expect(logoutBtn).toBeInstanceOf(HTMLButtonElement);
      expect(logoutBtn?.getAttribute('name')).toBe('Sair');
      expect(logoutBtn?.getAttribute('type')).toBe('button');
    });
  });
});
