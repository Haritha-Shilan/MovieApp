export const BASE_URL="https://api.themoviedb.org/3";
export const IMAGE_BASE_URL="https://image.tmdb.org/t/p/w500";

export const getSearchMovieUrl=(apiKey,text)=>`${BASE_URL}/search/movie?api_key=${apiKey}&query=${encodeURIComponent(text)}`;
export const getPopularMoviesUrl=(apiKey)=>`${BASE_URL}/movie/popular?api_key=${apiKey}`;
export const getMovieDetailsUrl=(apiKey,id)=>`${BASE_URL}/movie/${encodeURIComponent(id)}?api_key=${apiKey}`