import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { BASE_IMG_URL } from './MoviesList';
import { getActorsByFilm } from '../servises/api';

export const Cast = () => {
  const [cast, setCast] = useState([]);
  console.log(cast);

  const { movieId } = useParams();

  useEffect(() => {
    getActorsByFilm(movieId).then(setCast);
  }, [movieId]);

  if (!cast) {
    return;
  }

  return (
    <>
      <ul className="Cast_list">
        {cast.length === 0 ? (
          <div> Sorry we don t have cast </div>
        ) : (
          cast.map(el => (
            <li className="Cast_card" key={el.id}>
              <img
                src={`${BASE_IMG_URL}${el.profile_path}`}
                width="150px"
                alt={`${el.name}`}
              />
              <p>Character: {el.character}</p>
              <b>Original_name: {el.original_name}</b>
            </li>
          ))
        )}
      </ul>
    </>
  );
};
