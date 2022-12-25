import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchReviews } from 'services/API';
import { noticeError } from 'services/notification';
import { Loader } from 'components/Loader/Loader';

const Reviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);
  const [fetchStatus, setFetchStatus] = useState('idle');

  useEffect(() => {
    setFetchStatus('pending');

    fetchReviews(movieId)
      .then(reviews => {
        if (!reviews.length) {
          setFetchStatus('error');
          return;
        }
        setReviews(reviews);
        setFetchStatus('success');
      })
      .catch(error => {
        console.log(error);
        noticeError('Oops, something wrong!');
      });
  }, [movieId]);

  if (fetchStatus === 'pending') return <Loader />;

  if (fetchStatus === 'error')
    return <p>We don't have any reviews for this movie.</p>;

  if (fetchStatus === 'success')
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

export default Reviews;
