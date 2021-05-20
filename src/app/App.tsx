import React from 'react'
import { QueryClient, QueryClientProvider } from 'react-query'
import { MovieList } from '../movies';

const queryClient = new QueryClient()

export function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <MovieList/>
    </QueryClientProvider>
  );
}

