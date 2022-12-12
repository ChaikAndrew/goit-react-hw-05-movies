import { getFilmsByQuery } from '../servises/api';
import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { MoviesList } from 'components/MoviesList';
import { FcSearch } from 'react-icons/fc';

const Movies = () => {
  const [movie, setMovies] = useState([]);
  const [query, steQuery] = useState('');

  const [params, setParams] = useSearchParams();

  useEffect(() => {
    const movieName = params.get(`query`);
    if (!movieName) {
      return;
    }
    getFilmsByQuery(movieName).then(setMovies);
  }, [params]);

  const onChange = e => {
    steQuery(e.target.value);
  };

  const onSubmit = e => {
    e.preventDefault();
    setParams({ query });
  };

  return (
    <>
      <form className="Find_form" action="" onSubmit={onSubmit}>
        <input
          className="Input_form"
          type="text"
          placeholder="Enter the movie name"
          onChange={onChange}
        />
        <button type="submit" className="Search_btn">
          <FcSearch className="Search_btn-icon" />
        </button>
      </form>
      <MoviesList movies={movie} />
    </>
  );
};

export default Movies;
