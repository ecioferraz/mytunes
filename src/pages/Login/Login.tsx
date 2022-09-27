import React from 'react';
import { Footer } from '../../components';
import { LoginForm } from '../../templates';

import './styles.css';

export default function Login() {
  return (
    <>
      <main className='login-page'>
        <LoginForm />
      </main>
      <Footer
        author='wayhomestudio'
        className='image-credit'
        href='https://www.freepik.com/photos/people'
        tag='People'
      />
    </>
  );
}
