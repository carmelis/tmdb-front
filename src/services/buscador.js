import axios from "axios";

const API_KEY = "7ddf6488650297f2610fd1e33a532f4f";

export const getBuscador = (text) =>
  axios.get("https://api.themoviedb.org/3/search/multi", {
    params: {
      api_key: API_KEY,
      query: encodeURI(text)
    },
  })