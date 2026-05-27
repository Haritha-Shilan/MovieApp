
import {  getMovieDetailsUrl, getPopularMoviesUrl, getSearchMovieUrl } from '../utils/apiUrls'
import apiClient from './apiClient';


const apiKey = import.meta.env.VITE_TMDB_API_KEY;

export const searchMovieByName = async (name) => {
    const url = getSearchMovieUrl(apiKey, name);
    const response = await apiClient.get(url);
    return response.data.results;
}

export const getPopularMovies = async () => {
    const url = getPopularMoviesUrl(apiKey);
    var response = await apiClient.get(url);
    return response.data.results;
}

export const getMovieDetailsById = async (id) => {
    const url = getMovieDetailsUrl(apiKey, id);
    var response = await apiClient.get(url);
    return response.data;
}