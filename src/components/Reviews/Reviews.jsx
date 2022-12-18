import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchReviews } from 'components/service/API';

export const Reviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetchReviews(movieId).then(({ data }) => {
      const reviews = data.results.map(({ id, author, content }) => ({
        id,
        author,
        content,
      }));
      setReviews(reviews);
    });
  }, [movieId]);

  return (
    <ul>
      {reviews.map(({ id, author, content }) => (
        <li key={id}>
          <h3>Author: {author}</h3>

          <p>{content}</p>
        </li>
      ))}
    </ul>
  );
};
