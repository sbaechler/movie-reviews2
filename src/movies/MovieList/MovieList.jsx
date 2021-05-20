import React from 'react';
import ky from 'ky';
import {useQuery} from 'react-query';
import {MovieItem} from '../MovieItem/MovieItem';

async function getMovies() {
  return ky.get('/movies').json();
}

export function MovieList() {
  // We use useQuery for simplicity even though this is paginated data.
  const { data } = useQuery('movies', getMovies)

  return (
    <div className="p-1">
      <header>
        <h1 className="mb-2 text-3xl">Recent Movies</h1>
      </header>
      <main>
        <div className="grid grid-flow-row auto-rows-auto grid-cols-4 gap-x-1	gap-y-1.5">
        {data?.results.map(movie => (
          <MovieItem key={movie.id} movie={movie} />
        ))}
        </div>
      </main>
    </div>
  );
}
