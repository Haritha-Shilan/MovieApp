import { createContext, useEffect, useReducer } from "react";
import { movieInitialState, movieReducer } from "../reducers/movieReducer";

export const MovieContext = createContext();

export const MovieProvider = ({ children }) => {
    const [state, dispatch] = useReducer(movieReducer, movieInitialState);
    const handleAddToFavourite = (id) => {
        const isFavourite = state.favourites.some(movie => movie.id === id);
        console.log("Tests",isFavourite,id);
        isFavourite ?
            dispatch({ type: "REMOVE_FROM_FAVOURITES", payload: id }) :
            dispatch({ type: "ADD_TO_FAVOURITES", payload: id })

    }

    useEffect(()=>{
      localStorage.setItem("favourites", JSON.stringify(state.favourites))
    },[state.favourites])



    return (
        <MovieContext.Provider value={{ state, dispatch, handleAddToFavourite }}>
            {children}
        </MovieContext.Provider>
    )
}