import React, { useContext } from 'react'
import MovieList from '../components/MovieList'
import SearchBar from '../components/SearchBar'
import { MovieContext } from '../context/MovieContext';
function Home() {
    return (
        <>
            <SearchBar />
            <MovieList movieType="Popular Movies" />    
        </>
    )
}

export default Home
