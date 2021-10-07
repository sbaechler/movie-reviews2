import React from 'react'
import { QueryClient, QueryClientProvider } from 'react-query'
import { ReactQueryDevtools } from 'react-query/devtools'
import { MovieList } from '../movies';

const queryClient = new QueryClient()

export function App() {
  return (
    <QueryClientProvider client={queryClient}>
      {/* TODO: Add Router Code here */}
      <MovieList />
      
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}

