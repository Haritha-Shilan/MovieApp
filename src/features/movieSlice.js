import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getPopularMovies, searchMovieByName } from "../services/movieService";

export const loadFavourites = () => {
  var fav = localStorage.getItem("favourites");
  return !fav ? [] : JSON.parse(fav);
}

export const fetchPopularMovies = createAsyncThunk("movie/fetchPopularMovies",
  async () => {
    const movies = await getPopularMovies();
    return movies;
  }
);

export const fetchMovieByName = createAsyncThunk("movie/fetchMovieByName",
  async (name) => {
    const movies =await searchMovieByName(name);
    return movies;
  }
);

const initialState = {
  searchText: '',
  movies: [],
  isLoading: false,
  error: null,
  favourites: loadFavourites()
}

const movieSlice = createSlice({
  name: "movie",
  initialState,
  reducers: {
    setSearchText(state, action) {
      state.searchText = action.payload
    },
    addToFavourites(state, action) {
      const exists = state.favourites.some(movie => movie.id === action.payload);
      if (!exists) {
        state.favourites = [...state.favourites, state.movies.find(movie => movie.id === action.payload)];
      }
    },
    removeFromFavourites(state, action) {
      state.favourites = state.favourites.filter(movie =>
        movie.id !== action.payload
      )
    }
  },
  extraReducers: (builder) => {
    builder.addCase(fetchPopularMovies.pending,
      (state) => {
        state.isLoading = true;
        state.error = null;
      }
    );
    builder.addCase(fetchPopularMovies.rejected,
      (state, action) => {
        state.error = action.error.message;
        state.isLoading = false;
      }
    );
    builder.addCase(fetchPopularMovies.fulfilled,
      (state, action) => {
        state.isLoading = false;
        state.movies = action.payload;
        state.error = null;
      }
    );
    builder.addCase(fetchMovieByName.pending,
      (state) => {
        state.isLoading = true;
        state.error = null;
      }
    );
    builder.addCase(fetchMovieByName.rejected,
      (state, action) => {
        state.error = action.error.message;
        state.isLoading = false;
      }
    );
    builder.addCase(fetchMovieByName.fulfilled,
      (state, action) => {
        state.isLoading = false;
        state.movies = action.payload;
        state.error = null;
      }
    );
  }
});

export const { setSearchText, addToFavourites, removeFromFavourites } = movieSlice.actions
export default movieSlice.reducer;