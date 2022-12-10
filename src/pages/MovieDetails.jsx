import { getFilmsById } from '../servises/api';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Outlet, NavLink, useNavigate, useLocation } from 'react-router-dom';
import { BASE_IMG_URL } from '../components/MoviesList';

export const MovieDetails = () => {
  const [movie, setMovies] = useState(null);
  const { movieId } = useParams();
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    getFilmsById(movieId).then(setMovies);
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
        <button type="button" onClick={handleGoBack}>
          Go Back
        </button>

        <h2>{movie.title}</h2>
        <img
          className="Movie_info-img"
          src={BASE_IMG_URL + movie.poster_path}
          alt={movie.title}
        />

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
