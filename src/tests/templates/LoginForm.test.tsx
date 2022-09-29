import React from 'react';
import { createRoot, Root } from 'react-dom/client';
import { act } from 'react-dom/test-utils';
import { BrowserRouter } from 'react-router-dom';
import { LoginForm } from '../../templates';

const LOGIN_FORM = 'form[class="login-form"]';
const LOGIN_TITLE = 'h1[class="login-title"]';
const ERROR_MSG = 'p[class="error-message"]';
const EMAIL_INPUT = 'input[class="email-input"]';
const PASSWORD_INPUT = 'input[class="password-input"]';
const LOGIN_BTN = 'button[class="login-btn"]';

describe('Templates', () => {
  let container: HTMLDivElement | null = null;
  let root: Root | null = null;

  beforeAll(() => {
    container = document.createElement('div');
    document.body.appendChild(container);
    root = createRoot(container);
  });

  afterAll(() => act(() => root?.unmount()));

  describe('<LoginForm />', () => {
    let loginForm: HTMLFormElement | null | undefined;

    beforeEach(() => {
      act(() => {
        root?.render(
          <BrowserRouter>
            <LoginForm />
          </BrowserRouter>
        );
      });

      loginForm = container?.querySelector(LOGIN_FORM);
    });

    it('should render a <LoginForm />', () => {
      expect(loginForm).toBeTruthy();
      expect(loginForm?.children.length).toBe(3);
    });

    it('should render a <TextCard /> for the login title', () => {
      const loginTitle = loginForm?.querySelector(LOGIN_TITLE);

      expect(loginTitle).toBeTruthy();
      expect(loginTitle).toBeInstanceOf(HTMLHeadingElement);
      expect(loginTitle?.innerHTML).toBe('myTunes');
    });

    it('should render a <TextInput /> for email', () => {
      const emailInput = loginForm?.querySelector(EMAIL_INPUT);

      expect(emailInput).toBeTruthy();
      expect(emailInput).toBeInstanceOf(HTMLInputElement);
      expect(emailInput?.getAttribute('name')).toBe('email');
      expect(emailInput?.getAttribute('placeholder')).toBe('email@email.com');
      expect(emailInput?.getAttribute('type')).toBe('email');
    });

    it('should render a <TextInput /> for password', () => {
      const passwordInput = loginForm?.querySelector(PASSWORD_INPUT);

      expect(passwordInput).toBeTruthy();
      expect(passwordInput).toBeInstanceOf(HTMLInputElement);
      expect(passwordInput?.getAttribute('name')).toBe('password');
      expect(passwordInput?.getAttribute('placeholder')).toBe('Senha');
      expect(passwordInput?.getAttribute('type')).toBe('password');
    });

    it('should render a login <Button />', () => {
      const loginBtn = loginForm?.querySelector(LOGIN_BTN);

      expect(loginBtn).toBeTruthy();
      expect(loginBtn).toBeInstanceOf(HTMLButtonElement);
      expect(loginBtn?.getAttribute('name')).toBe('Entrar');
      expect(loginBtn?.getAttribute('type')).toBe('submit');
    });
  });
});
