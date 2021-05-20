import React from 'react';
import ky from 'ky';
import {useQuery} from 'react-query';

async function getMovies() {
  return ky.get('/movies').json();
}

export function MovieList() {
  const { data } = useQuery('movies', getMovies)

  return (
    <div>
      <header>
        <h1>Recent Movies</h1>
      </header>
      <main>
        {data?.results.map(movie => (
          <div className="cell" key={movie.id}>
            {movie.title}
          </div>
        ))}
      </main>
    </div>
  );
}
