import { useDispatch, useSelector } from "react-redux";
import { addToFavourites, fetchMovieByName, fetchPopularMovies, removeFromFavourites, setSearchText } from '../features/movieSlice';
export const useMovies = () => {
    const state = useSelector(state => state.movie);
    const dispatch = useDispatch();
    
    const loadPopularMovies = () => {
        dispatch(fetchPopularMovies());
    }

    const handleSearchText = (text) => {
        dispatch(setSearchText(text));
        dispatch(fetchMovieByName(text));
    }

    const handleAddToFavourite = (id) => {
        const isFavourite = state.favourites.some(movie => movie.id === id);
        isFavourite ?
            dispatch(removeFromFavourites(id)) :
            dispatch(addToFavourites(id))

    }

    return { state, loadPopularMovies, handleSearchText, handleAddToFavourite };
}


