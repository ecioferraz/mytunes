import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { Login } from '../pages';
import { readUser } from '../services/localStorage';

export default function Router() {
  return (
    <Routes>
      <Route
        path='/'
        element={
          readUser() ? <Navigate to={'/search'} /> : <Navigate to={'/login'} />
        }
      />
      <Route path='/login' element={<Login />} />
    </Routes>
  );
}
