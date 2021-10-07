import React from 'react';
import { IMAGE_BASE_URL } from "../../constants";

/**
 * A single item of the movie list.
 * Contains an image and the title as well as a link to the detail page.
 */
export function MovieItem({movie}) {
  const posterPath = `${IMAGE_BASE_URL}/w342/${movie.poster_path}`;

  return (
    <div className="relative">
      <img src={posterPath} alt="" />
      <p className="absolute inset-x-0 bottom-0 bg-white bg-opacity-95	 px-1 py-0.5">{movie.title}</p>
    </div>
  )
}
