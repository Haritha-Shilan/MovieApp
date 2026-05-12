
export const loadFavourites = () => {
  var fav = localStorage.getItem("favourites");
  return !fav  ? [] : JSON.parse(fav);
}

export const movieInitialState = {
  searchText: '',
  movies: [],
  isLoading: false,
  error: null,
  favourites: loadFavourites()
}



export const movieReducer = (state, action) => {
  switch (action.type) {
    case "SET_SEARCH_TEXT":
      return {
        ...state,
        searchText: action.payload
      }
    case "FETCH_START":
      return {
        ...state,
        isLoading: true,
        error: null
      }
    case "FETCH_SUCCESS":
      return {
        ...state,
        isLoading: false,
        movies: action.payload,
        error: null
      }
    case "FETCH_FAILURE":
      return {
        ...state,
        error: action.payload,
        isLoading: false
      }
    case "ADD_TO_FAVOURITES":

      const exists = state.favourites.some(
        movie => movie.id === action.payload
      );


      if (exists) return state;
      return {
        ...state,
        favourites: [...state.favourites, state.movies.find(movie => movie.id === action.payload)]
      }
    case "REMOVE_FROM_FAVOURITES":
      return {
        ...state,
        favourites: state.favourites.filter(movie => movie.id !== action.payload)
      }

    default: return state;
  }
}