import axios from 'axios';

export const getTrending = async (type) =>
  axios
    .get(`https://api.themoviedb.org/3/${type}/550?api_key=${process.env.REACT_APP_TMDB_KEY}`)
    .then((result) => console.log(result));
