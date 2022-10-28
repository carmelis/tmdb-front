import axios from "axios";

const API_KEY = "7ddf6488650297f2610fd1e33a532f4f";

export const getSeries = () =>
  axios.get("https://api.themoviedb.org/3/discover/tv", {
    params: {
      api_key: API_KEY,
    },
  });