import { NavLink } from 'react-router-dom';

export const Navigation = () => {
  return (
    <nav className="Nav_list">
      <NavLink
        style={() => ({
          marginRight: '20px',
        })}
        to="/"
      >
        Home
      </NavLink>
      <NavLink to="/movies">Movies</NavLink>
    </nav>
  );
};
