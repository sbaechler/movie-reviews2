import React from 'react';

export function MovieReviews({ reviews, movieId }) {
  const reviewList = reviews.map(review => {
    const dateString = review.updated_at
      ? new Date(review.updated_at).toLocaleDateString()
      : "just now";

    return (
      <li key={review.id} className="mb-3 w-9/12">
        <h4>
          {review.author} <small>{dateString}</small>
        </h4>
        <p>{review.content}</p>
      </li>
    );
  });

  return (
    <div className="my-1 mb-3">
      <h2 className="text-2xl mb-2 text-blueGray-800">Reviews</h2>
      <ul className="">{reviewList}</ul>
    </div>
  );
}
