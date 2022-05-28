const axios = require("axios").default;

export const imageBaseUrl = "https://image.tmdb.org/t/p/original/";
const instance = axios.create({
  baseURL: "https://api.themoviedb.org/3",
});

export default instance;
