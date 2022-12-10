import { NavLink } from 'react-router-dom';
import { FcHome, FcClapperboard } from 'react-icons/fc';

export const Navigation = () => {
  return (
    <nav className="Nav_list">
      <NavLink
        style={() => ({
          marginRight: '20px',
        })}
        to="/"
      >
        <FcHome className="Nav_icon" />
      </NavLink>

      <NavLink to="/movies">
        <FcClapperboard className="Nav_icon" />
      </NavLink>
    </nav>
  );
};
