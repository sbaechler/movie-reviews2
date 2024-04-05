import React from 'react'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { MovieList } from '../movies';

const queryClient = new QueryClient();

export function App() {
  // TODO: create the browser router here.

  return (
    <QueryClientProvider client={queryClient}>
      {/* TODO: Add Router Code here */}
      <MovieList />

      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}
