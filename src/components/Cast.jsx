import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { BASE_IMG_URL } from './MoviesList';
import { getActorsByFilm } from '../servises/api';
const posterFakeUrl = 'https://titterfun.com/api/assets/image/1m7fesydid42.jpg';

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
    <div>
      {cast.length > 0 ? (
        <ul className="Cast_list">
          {cast.map(actor => (
            <li className="Cast_card" key={actor.id}>
              {actor.profile_path ? (
                <img
                  className="Actor_card"
                  src={`${BASE_IMG_URL + actor.profile_path}`}
                  alt={actor.name}
                  width={150}
                  height={220}
                />
              ) : (
                <img
                  className="Actor_card"
                  src={`${posterFakeUrl}`}
                  alt={actor.name}
                  width={150}
                  height={220}
                />
              )}
              <p>{actor.name}</p>
              <p>Character: {actor.character}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>No information</p>
      )}
    </div>
  );
};
