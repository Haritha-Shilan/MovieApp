import { useContext } from "react";
import { MovieContext } from "../context/MovieContext";
import { getPopularMovies, searchMovieByName } from "../services/movieService";
import React from "react";

export const useMovies = () => {
    const { state, dispatch } = useContext(MovieContext);

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

    const handleAddToFavourite = (id) => {
        const isFavourite = state.favourites.some(movie => movie.id === id);
        isFavourite ?
            dispatch({ type: "REMOVE_FROM_FAVOURITES", payload: id }) :
            dispatch({ type: "ADD_TO_FAVOURITES", payload: id })

    }

    return { state, dispatch, loadPopularMovies, handleSearchText,handleAddToFavourite };
}


