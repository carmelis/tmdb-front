const axios = require("axios");


export const getFavoritos = (id) =>
  axios.get("http://localhost:3001/api/favorites", {
  params:{
    id
  }
  });

