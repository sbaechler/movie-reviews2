import React from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { MovieDetail, MovieList } from '../movies';
import { TmdbAttribution } from '../movies/TmdbAttribution';

const queryClient = new QueryClient();

export function App() {
  const router = createBrowserRouter([
    { path: '/', element: <MovieList /> },
    { path: '/movies/:id', element: <MovieDetail /> },
  ]);

  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
      <ReactQueryDevtools initialIsOpen={false} />
      <TmdbAttribution />
    </QueryClientProvider>
  );
}
