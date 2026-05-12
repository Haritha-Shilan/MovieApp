import React, { useContext, useEffect, useReducer } from 'react'
import { getPopularMovies, searchMovieByName } from './services/movieService';
import { movieReducer, movieInitialState } from './reducers/movieReducer';
import { Link, Route, Routes } from 'react-router-dom';
import MovieDetails from './pages/MovieDetails';
import Home from './pages/Home';
import Favorites from './pages/Favorites';
import AppNavbar from './components/AppNavbar';
import { MovieContext } from './context/MovieContext';

function App() {

  const {state, dispatch} = useContext(MovieContext);

  const handleSearchText = async (text) => {
    dispatch({ type: "SET_SEARCH_TEXT", payload: text })
    dispatch({ type: "FETCH_START" })
    try {

      const resultMovies = await searchMovieByName(text);
      dispatch({ type: "FETCH_SUCCESS", payload: resultMovies })

    }
    catch (error) {
      dispatch({ type: "FETCH_FAILURE", payload: error.message })
    }
  }

  const loadPopularMovies = async () => {
    dispatch({ type: "FETCH_START" })
    try {
      const popularMovies = await getPopularMovies();
      dispatch({ type: "FETCH_SUCCESS", payload: popularMovies })
    }
    catch (error) {

      dispatch({ type: "FETCH_FAILURE", payload: error.message })
    }
  }

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