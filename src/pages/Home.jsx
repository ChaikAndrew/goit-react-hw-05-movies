import { useState, useEffect } from 'react';
import { getTrandingFilms } from '../servises/api';
import { MoviesList } from '../components/MoviesList';

export const Home = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    getTrandingFilms().then(setMovies);
  }, []);

  return (
    <>
      <h1 className="Home_title">Most Popular films</h1>
      <MoviesList movies={movies} />
    </>
  );
};
