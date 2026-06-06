import { useEffect, lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import ProtectedRoute from './components/ProtectedRoute';
import { useMovies } from './hooks/useMovies';
import MainLayout from './layouts/MainLayout';
import Favorites from './pages/Favorites';
const Home = lazy(() => import('./pages/Home'));
const Login = lazy(() => import('./pages/Login'));
const MovieDetails = lazy(() => import('./pages/MovieDetails'));
const NotFound = lazy(import('./pages/NotFound'));
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
      <Suspense fallback={<div>Loading Page...</div>}>
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
        </Suspense>
      </div>
    </>


  )
}

export default App