import { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import { useMovies } from './hooks/useMovies';
import MainLayout from './layouts/MainLayout';
import Favorites from './pages/Favorites';
import Home from './pages/Home';
import MovieDetails from './pages/MovieDetails';
import NotFound from './pages/NotFound';
import ProtectedRoute from './components/ProtectedRoute';
import Login from './pages/Login';

function App() {
  const { loadPopularMovies } = useMovies();

  useEffect(() => {
    loadPopularMovies();
  }, [])


  return (

    <>
      <div >
        <Routes >
          <Route element={<MainLayout />}>
            <Route index element={
              <Home />
            } />
            <Route path='movie/:id' element={<MovieDetails />} />
            <Route element={<ProtectedRoute/>}>
              <Route path='favorites' element={<Favorites />} />
            </Route>
            <Route path="login" element={<Login />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </div>
    </>


  )
}

export default App