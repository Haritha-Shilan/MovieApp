import axios from 'axios';
import {  getMovieDetailsUrl, getPopularMoviesUrl, getSearchMovieUrl } from '../utils/apiUrls'


const apiKey = import.meta.env.VITE_TMDB_API_KEY;

export const searchMovieByName = async (name) => {
    const url = getSearchMovieUrl(apiKey, name);
    const response = await axios.get(url);
    return response.data.results;
}

export const getPopularMovies = async () => {
    const url = getPopularMoviesUrl(apiKey);
    var response = await axios.get(url);
    return response.data.results;
}

export const getMovieDetailsById = async (id) => {
    const url = getMovieDetailsUrl(apiKey, id);
    var response = await axios.get(url);
    return response.data;
}