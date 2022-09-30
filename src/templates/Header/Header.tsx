import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Button, HeaderLink, TextCard } from '../../components';
import { removeUser } from '../../services/localStorage';

import './styles.css';

export default function Header() {
  const { pathname } = useLocation();
  const navigate = useNavigate();

  const handleLogout = () => {
    removeUser();
    navigate('/login');
  };

  return (
    <>
      {!pathname.includes('/login') && (
        <header>
          <TextCard as='h1' className='mytunes-title' text='myTunes' />
          <nav>
            <HeaderLink className='search-link' name='Buscar' path='search' />
            <HeaderLink
              className='favorites-link'
              name='Favoritas'
              path='favorites'
            />
          </nav>
          <Button
            className='logout-btn'
            name='Sair'
            type='button'
            handleClick={handleLogout}
          />
        </header>
      )}
    </>
  );
}
