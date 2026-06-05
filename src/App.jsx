import { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import ProtectedRoute from './components/ProtectedRoute';
import { useMovies } from './hooks/useMovies';
import MainLayout from './layouts/MainLayout';
import Favorites from './pages/Favorites';
import Home from './pages/Home';
import Login from './pages/Login';
import MovieDetails from './pages/MovieDetails';
import NotFound from './pages/NotFound';
import { useSelector } from 'react-redux';

function App() {
  const { loadPopularMovies } = useMovies();

  useEffect(() => {
    loadPopularMovies();
  }, [])

  const favourites = useSelector(
    state => state.movie.favourites
  );

  useEffect(() => {
    localStorage.setItem(
      "favourites",
      JSON.stringify(favourites)
    );
  }, [favourites]);

  return (

    <>
      <div >
        <Routes >
          <Route element={<MainLayout />}>
            <Route index element={
              <Home />
            } />
            <Route path='movie/:id' element={<MovieDetails />} />
            <Route element={<ProtectedRoute />}>
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