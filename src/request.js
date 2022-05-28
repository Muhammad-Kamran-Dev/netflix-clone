import {getRandomNumberBetween} from './utils';

const API_KEY = process.env.REACT_APP_API_KEY;
const requests = { 
  fetchTrending: `/trending/all/week?api_key=${API_KEY}&language=en-US&page=${getRandomNumberBetween(10,50)}`,
  fetchNetflixOriginals: `/discover/tv?api_key=${API_KEY}&with_networks=213&page=${getRandomNumberBetween(10,50)}`,
  fetchTopRated: `/movie/top_rated?api_key=${API_KEY}&language=en-US&page=${getRandomNumberBetween(10,50)}`,
  fetchActionMovies: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
  fetchComedyMovies: `/discover/movie?api_key=${API_KEY}&with_genres=35&page=${getRandomNumberBetween(10,50)}`,
  fetchRomanceMovies: `/discover/movie?api_key=${API_KEY}&with_genres=10749&page=${getRandomNumberBetween(10,50)}`,
  fetchDocumentaries: `/discover/movie?api_key=${API_KEY}&with_genres=99&page=${getRandomNumberBetween(1,10)}`
};

export default requests;