import { render, screen } from '@testing-library/react';
import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { describe, expect, test } from 'vitest';
import { getMovies } from '../../api/movies';
import { setupMockServer } from '../../test-utils/msw';
import { handlers } from '../mocks/handlers';
import { getQueryClient } from '../../test-utils/react-query';
import { TestWrapper } from '../../test-utils/TestWrapper';
import { MovieItem } from './MovieItem';

describe('MovieItem', () => {
  setupMockServer(...handlers);

  let firstMovie;
  beforeAll(async () => {
    const moviesResponse = await getMovies();

    firstMovie = moviesResponse[0];
  });

  function renderComponent() {
    const queryClient = getQueryClient();

    const Wrapper = ({ children }) => (
      <MemoryRouter>
        <TestWrapper queryClient={queryClient} children={children} />
      </MemoryRouter>
    );

    return render(<MovieItem movie={firstMovie} />, { wrapper: Wrapper });
  }

  test('can render the component', async () => {
    renderComponent();

    expect(screen.getByText(firstMovie.title)).toBeDefined();
  });

  test.todo('navigates to the movie details page when clicking on a movie item', () => {
    renderComponent();
  });
});
