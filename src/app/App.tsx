import React from 'react'
import { Provider, defaultTheme, Button } from '@adobe/react-spectrum';
import { QueryClient, QueryClientProvider } from 'react-query'
import { MovieList } from '../movies';

const queryClient = new QueryClient()

export function App() {
  return (
    <Provider theme={defaultTheme}>
      <QueryClientProvider client={queryClient}>
        <MovieList/>
      </QueryClientProvider>
    </Provider>
  );
}

