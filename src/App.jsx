import React, { useContext, useEffect, useReducer } from 'react'
import { getPopularMovies, searchMovieByName } from './services/movieService';
import { movieReducer, movieInitialState } from './reducers/movieReducer';
import { Link, Route, Routes } from 'react-router-dom';
import MovieDetails from './pages/MovieDetails';
import Home from './pages/Home';
import Favorites from './pages/Favorites';
import AppNavbar from './components/AppNavbar';
import { MovieContext } from './context/MovieContext';
import { useMovies } from './hooks/useMovies';

function App() {
  const { loadPopularMovies } = useMovies();

  useEffect(() => {
    loadPopularMovies();
  }, [])

  return (

    <>
     <AppNavbar/>
      <div >
        <Routes>
          <Route path="/" element={
            <Home />
          } />
          <Route path='/movie/:id' element={<MovieDetails />} />
          <Route path='/favorites' element={<Favorites  />} />
        </Routes>
      </div>
    </>


  )
}

export default App