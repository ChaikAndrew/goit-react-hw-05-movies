import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getReviewByFilm } from '../servises/api';

const Reviews = () => {
  const [review, setReview] = useState('');

  const { movieId } = useParams();

  useEffect(() => {
    getReviewByFilm(movieId).then(setReview);
  }, [movieId]);

  if (!review) {
    return;
  }

  return (
    <>
      <ul>
        {review.length === 0 ? (
          <div> Sorry we dont have reviews </div>
        ) : (
          review.map(el => (
            <li className="Info_author" key={el.id}>
              <p>Author: {el.author}</p>
              <p>{el.content}</p>
            </li>
          ))
        )}
      </ul>
    </>
  );
};

export default Reviews;
