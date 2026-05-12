import { BASE_URL, getMovieDetailsUrl, getPopularMoviesUrl, getSearchMovieUrl } from '../utils/apiUrls'


const apiKey = import.meta.env.VITE_TMDB_API_KEY;

export const searchMovieByName = async (name) => {
    const url = getSearchMovieUrl(apiKey, name);

    const response = await fetch(url);
    const json = await response.json();

    return json.results;
}

export const getPopularMovies = async () => {
    const url = getPopularMoviesUrl(apiKey);
    var response = await fetch(url);
    var json = await response.json();
    return json.results;
}

export const getMovieDetailsById = async (id) => {
    const url = getMovieDetailsUrl(apiKey, id);
    var response = await fetch(url);
    var json = await response.json();
    return json;
}