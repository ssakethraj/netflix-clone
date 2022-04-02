export const API_KEY = "<your api key>";
export const BASE_API_URL = "https://api.themoviedb.org/3";
export const BASE_IMAGE_URL = "https://image.tmdb.org/t/p/original";

export const endpoints = {
  trending: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
  topRated: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
  actionGenre: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
  horrorGenre: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
  discover: `/discover/tv?api_key=${API_KEY}&with_network=123`,
};
