import { Navigate, Route, Routes } from 'react-router-dom';
import { Album, Favorites, Login, Search } from '../pages';
import { readUser } from '../services/localStorage';

export default function Router() {
  return (
    <Routes>
      <Route
        path="/mytunes"
        element={
          !readUser() ? <Navigate to={'/login'} /> : <Navigate to={'/search'} />
        }
      />
      <Route path="/mytunes/login" element={<Login />} />
      <Route path="/mytunes/search" element={<Search />} />
      <Route path="/mytunes/favorites" element={<Favorites />} />
      <Route path="/mytunes/album/:id" element={<Album />} />
    </Routes>
  );
}
