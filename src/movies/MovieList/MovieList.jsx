import React from 'react';
import ky from 'ky';
import {useQuery} from 'react-query';
import {Grid, Header, Heading, repeat, View} from '@adobe/react-spectrum';
import {MovieItem} from '../MovieItem/MovieItem';

async function getMovies() {
  return ky.get('/movies').json();
}

export function MovieList() {
  // We use useQuery for simplicity even though this is paginated data.
  const { data } = useQuery('movies', getMovies)

  return (
    <div>
      <Header>
        <Heading level={1}>Recent Movies</Heading>
      </Header>
      <main>
        <Grid
          columns={repeat('auto-fit', 'size-1600')}
          autoRows="size-1600"
          justifyContent="center"
          gap="size-100">
        {data?.results.map(movie => (
          <MovieItem key={movie.id} movie={movie} />
        ))}
        </Grid>
      </main>
    </div>
  );
}
