import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { Album, Favorites, Login, Search } from '../pages';
import { readUser } from '../services/localStorage';

export default function Router() {
  return (
    <Routes>
      <Route
        path='/'
        element={
          !readUser() ? <Navigate to={'/login'} /> : <Navigate to={'/search'} />
        }
      />
      <Route path='/login' element={<Login />} />
      <Route path='/search' element={<Search />} />
      <Route path='/favorites' element={<Favorites />} />
      <Route path='/album/:id' element={<Album />} />
    </Routes>
  );
}
