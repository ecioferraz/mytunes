import React from 'react';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import Router from './routes/Router';
import { Header } from './templates';
import FavoritesProvider from './provider/FavoritesProvider';

function App() {
  return (
    <BrowserRouter>
      <FavoritesProvider>
        <Header />
        <Router />
      </FavoritesProvider>
    </BrowserRouter>
  );
}

export default App;
