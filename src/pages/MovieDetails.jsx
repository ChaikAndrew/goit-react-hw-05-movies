import { getFilmsById, getGenres } from '../servises/api';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Outlet, NavLink, useNavigate, useLocation } from 'react-router-dom';
import { BASE_IMG_URL } from '../components/MoviesList';

import { BsFillArrowLeftSquareFill } from 'react-icons/bs';

export const MovieDetails = () => {
  const [movie, setMovies] = useState(null);
  const { movieId } = useParams();
  const navigate = useNavigate();
  const location = useLocation();
  const [genres, setGenres] = useState([]);

  useEffect(() => {
    getFilmsById(movieId).then(setMovies);
  }, [movieId]);

  useEffect(() => {
    getGenres(movieId).then(setGenres);
  }, [movieId]);

  if (!movie) {
    return;
  }

  const handleGoBack = () => {
    navigate(location.state.from);
  };

  return (
    <>
      <div className="Movie_info">
        <button className="Back_btn" type="button" onClick={handleGoBack}>
          <BsFillArrowLeftSquareFill className="Back_btn-icon" />
        </button>

        <h2>{movie.title}</h2>
        <img
          className="Movie_info-img"
          src={BASE_IMG_URL + movie.poster_path}
          alt={movie.title}
        />
        <div className="Movie_info-container">
          <p className="Movie-info_title">
            Popularity:
            <span className="Movie_info-raiting">
              {movie.popularity.toFixed(0)}
            </span>
          </p>

          <p className="Movie-info_title">
            Vote Average:
            <span className="Movie_info-raiting">
              {movie.vote_average.toFixed(1)}
            </span>
          </p>
        </div>

        <p className="Ganres_title">Ganres:</p>
        <ul className="Ganres_list">
          {genres.map(({ id, name }) => (
            <li className="Ganres_item" key={id}>
              {name}
            </li>
          ))}
        </ul>
        <NavLink to="cast" state={location.state}>
          Cast
        </NavLink>
        <NavLink to="reviews" state={location.state}>
          Reviews
        </NavLink>
        <Outlet />
      </div>
    </>
  );
};
