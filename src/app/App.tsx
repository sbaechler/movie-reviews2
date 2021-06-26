import React from 'react'
import { QueryClient, QueryClientProvider } from 'react-query'
import { ReactQueryDevtools } from 'react-query/devtools'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { MovieDetail, MovieList } from '../movies';
import { TmdbAttribution } from '../movies/TmdbAttribution'

const queryClient = new QueryClient()

export function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Switch>
          <Route path="/movies/:id"><MovieDetail /></Route>
          <Route path="/"><MovieList /></Route>
        </Switch>
      </BrowserRouter>
      <ReactQueryDevtools initialIsOpen={false} />
      <TmdbAttribution />
    </QueryClientProvider>
  );
}

