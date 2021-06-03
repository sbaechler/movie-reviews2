import React from 'react';
import ky from 'ky';
import {useQuery} from 'react-query';
import {MovieItem} from './MovieItem';

async function getMovies() {
  return ky.get('/movies').json();
}

export function MovieList() {
  const { data, isLoading } = useQuery('movies', getMovies)

  if(isLoading) {
    return <div className="p-1">Loading...</div>
  }

  return (
    <div className="p-1">
      <header>
        <h1 className="mb-2 text-3xl">Recent Movies</h1>
      </header>
      <main>
        <div className="grid grid-flow-row auto-rows-auto grid-cols-4 gap-x-1	gap-y-1.5">
        {data?.map(movie => (
          <MovieItem key={movie.id} movie={movie} />
        ))}
        </div>
      </main>
    </div>
  );
}
