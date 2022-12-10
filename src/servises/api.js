import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3';
const API_KEY = '74469b9d93972ec6b26a5796c39ad279';

export const getTrandingFilms = async () => {
  const {
    data: { results },
  } = await axios.get(`/trending/movie/day?api_key=${API_KEY}`);
  return results;
};

export const getFilmsById = async id => {
  const { data } = await axios.get(
    `/movie/${id}?api_key=${API_KEY}&language=en-US`
  );
  return data;
};

export const getFilmsByQuery = async query => {
  const {
    data: { results },
  } = await axios.get(
    `/search/movie?api_key=${API_KEY}&query=${query}&language=en-US&page=1&include_adult=false`
  );
  console.log(results);
  return results;
};

export const getReviewByFilm = async id => {
  const {
    data: { results },
  } = await axios.get(
    `/movie/${id}/reviews?api_key=${API_KEY}&language=en-US&page=1`
  );
  return results;
};

export const getActorsByFilm = async id => {
  const {
    data: { cast },
  } = await axios.get(`/movie/${id}/credits?api_key=${API_KEY}&language=en-US`);
  return cast;
};

export const getGenres = async movieId => {
  const {
    data: { genres },
  } = await axios.get(`/movie/${movieId}?api_key=${API_KEY}`);
  // console.log(res.data.genres)
  return genres;
};
