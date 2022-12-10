import { NavLink, useLocation } from 'react-router-dom';
export const BASE_IMG_URL = 'https://image.tmdb.org/t/p/w500/';

export const MoviesList = ({ movies }) => {
  const location = useLocation();
  return (
    <ul className="Movie_list">
      {movies.map(movie => (
        <li className="Movie_link" key={movie.id}>
          <NavLink
            style={() => ({
              width: '200px',
              height: '350px',
              display: 'flex',
              flexDirection: 'column',
              alignContent: 'center',
              justifyContent: 'space-between',
            })}
            to={`/movies/${movie.id}`}
            state={{ from: location }}
          >
            <img
              className="Movie_img"
              src={BASE_IMG_URL + movie.poster_path}
              alt={movie.title}
              width={200}
            />
            {movie.title}
          </NavLink>
        </li>
      ))}
    </ul>
  );
};
