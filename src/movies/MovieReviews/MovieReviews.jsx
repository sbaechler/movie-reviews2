import React from 'react';
import { AddReview } from "./AddReview";

export function MovieReviews({ reviews, movieId }) {
  const reviewList = reviews.map(review => {
    const dateString = review.publication_date
      ? new Date(review.publication_date).toLocaleDateString()
      : "just now";

    return (
      <li key={review.id}>
        <h4>
          {review.author} <small>{dateString}</small>
        </h4>
        <p>{review.content}</p>
      </li>
    );
  });

  return (
    <div className="reviews">
      <ul className="reviews__list no-bullet">{reviewList}</ul>
      <AddReview movieId={movieId} />
    </div>
  );
}
