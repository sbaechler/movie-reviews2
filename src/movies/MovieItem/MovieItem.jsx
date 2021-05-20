import React from 'react';
import { POSTER_BASE_URL, POSTER_SIZES } from "../../config/constants";

export function MovieItem({movie}) {
  const posterPath = `${POSTER_BASE_URL}/${POSTER_SIZES["342"]}/${
    movie.poster_path
  }`;

  return (
    <div className="movie-list__entry card">
      <img src={posterPath} alt="" />
      {movie.title}
    </div>
  )
}
