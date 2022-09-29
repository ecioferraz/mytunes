import React from 'react';
import { createRoot, Root } from 'react-dom/client';
import { act } from 'react-dom/test-utils';
import { BrowserRouter } from 'react-router-dom';
import { Login } from '../../pages';

const LOGIN_PAGE = 'main[class="login-page"]';

describe('Pages', () => {
  let container: HTMLDivElement | null = null;
  let root: Root | null = null;

  beforeAll(() => {
    container = document.createElement('div');
    document.body.appendChild(container);
    root = createRoot(container);
  });

  afterAll(() => act(() => root?.unmount()));

  describe('<Login />', () => {
    let loginPage: HTMLElement | null | undefined;

    beforeEach(() => {
      act(() => {
        root?.render(
          <BrowserRouter>
            <Login />
          </BrowserRouter>
        );
      });

      loginPage = container?.querySelector(LOGIN_PAGE);
    });

    afterEach(() => {
      loginPage = null;
    });

    it('should render <Login />', () => {
      expect(loginPage).toBeTruthy();
      expect(loginPage?.children.length).toBe(1);
      expect(loginPage?.children[0].className).toBe('login-form');
    });
  });
});
