import React from 'react';
import { POSTER_BASE_URL, POSTER_SIZES } from "../../config/constants";

export function MovieItem({movie}) {
  const posterPath = `${POSTER_BASE_URL}/${POSTER_SIZES["342"]}/${
    movie.poster_path
  }`;

  return (
    <div className="relative">
      <img src={posterPath} alt="" />
      <p className="absolute inset-x-0 bottom-0 bg-white bg-opacity-95	 px-1 py-0.5">{movie.title}</p>
    </div>
  )
}
