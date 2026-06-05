import { configureStore } from "@reduxjs/toolkit";
import movieReducer from "../features/movieSlice"
import authReducer from "../features/AuthSlice"

const store = configureStore({
    reducer: {
        movie: movieReducer,
        auth:authReducer
    }
});

export default store;