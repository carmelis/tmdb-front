import axios from "axios";

const API_KEY = "7ddf6488650297f2610fd1e33a532f4f";

export const getMovies = () =>
  axios.get("https://api.themoviedb.org/3/movie/76341?api_key=", {
    params: {
      api_key: API_KEY,
    },
  });