import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchReviews } from 'components/service/API';

const Reviews = () => {
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

  return !reviews.length ? (
    <p>We don't have any reviews for this movie.</p>
  ) : (
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

export default Reviews;
