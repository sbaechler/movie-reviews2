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
          <Route path="/movies/:id" component={MovieDetail} />
          <Route path="/" component={MovieList}/>
        </Switch>
      </BrowserRouter>
      <ReactQueryDevtools initialIsOpen={false} />
      <TmdbAttribution />
    </QueryClientProvider>
  );
}

