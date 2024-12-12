// @vitest-environment jsdom

import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { describe, expect, test, beforeAll } from 'vitest';
import { getMovies } from '../../api/movies';
import { TestWrapper } from '../../test-utils/TestWrapper';
import { setupMockServer } from '../../test-utils/msw';
import { getQueryClient } from '../../test-utils/react-query';
import { handlers } from '../mocks/handlers';
import { MovieList } from './MovieList';

describe('MovieList', () => {
  setupMockServer(...handlers);

  let allMovies;
  beforeAll(async () => {
    const moviesResponse = await getMovies();

    allMovies = moviesResponse;
  });

  function renderComponent() {
    const queryClient = getQueryClient();
    const Wrapper = ({ children }) => (
      <MemoryRouter>
        <TestWrapper queryClient={queryClient} children={children} />
      </MemoryRouter>
    );

    return render(<MovieList />, { wrapper: Wrapper });
  }

  test('can render the component', () => {
    renderComponent();

    expect(screen.getByText('Loading...')).toBeDefined();
  });

  test("should render the movie list when it's done with loading the movies data", async () => {
    renderComponent();

    expect(screen.getByText('Loading...')).toBeDefined();

    const heading = await screen.findByRole('heading', {
      name: /Recent Movies/,
    });
    expect(heading).toBeDefined();
  });

  test('should render the list of links with the right href', async () => {
    renderComponent();
    const user = userEvent.setup();

    // Wait for the screen to be loaded
    await screen.findByRole('heading', {
      name: /Recent Movies/,
    });

    const movieItemLinks = screen.getAllByRole('link');
    movieItemLinks.forEach((link, i) => {
      expect(link.getAttribute('href')).toBe(`/movies/${allMovies[i].id}`);
    });
  });
});
