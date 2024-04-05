import { render, screen } from '@testing-library/react';
import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { describe, expect, test } from 'vitest';
import { getMovies, getMovie } from '../../api/movies';
import { TestWrapper } from '../../test-utils/TestWrapper';
import { setupMockServer } from '../../test-utils/msw';
import { getQueryClient } from '../../test-utils/react-query';
import { handlers } from '../mocks/handlers';
import { MovieReviews } from './MovieReviews';

describe('MovieReviews', () => {
  setupMockServer(...handlers);

  let firstMovie;
  beforeAll(async () => {
    const moviesResponse = await getMovies();
    const firstMovieResponse = await getMovie(moviesResponse[0].id);

    firstMovie = firstMovieResponse;
  });

  function renderComponent() {
    const queryClient = getQueryClient();
    const Wrapper = ({ children }) => (
      <MemoryRouter>
        <TestWrapper queryClient={queryClient} children={children} />
      </MemoryRouter>
    );

    return render(<MovieReviews movieId={firstMovie.info.id} reviews={[]} />, {
      wrapper: Wrapper,
    });
  }

  test('can render the component', () => {
    renderComponent();

    expect(screen.getByText('Reviews')).toBeDefined();
  });
});
