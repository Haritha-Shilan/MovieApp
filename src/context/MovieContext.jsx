import { createContext, useEffect, useReducer } from "react";
import { movieInitialState, movieReducer } from "../reducers/movieReducer";

export const MovieContext = createContext();

export const MovieProvider = ({ children }) => {
    const [state, dispatch] = useReducer(movieReducer, movieInitialState);

    useEffect(()=>{
      localStorage.setItem("favourites", JSON.stringify(state.favourites))
    },[state.favourites])



    return (
        <MovieContext.Provider value={{ state, dispatch }}>
            {children}
        </MovieContext.Provider>
    )
}