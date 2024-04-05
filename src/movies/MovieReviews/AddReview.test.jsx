import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { afterEach, beforeAll, describe, expect, test, vi } from 'vitest';
import * as MoviesApi from '../../api/movies';
import { TestWrapper } from '../../test-utils/TestWrapper';
import { setupMockServer } from '../../test-utils/msw';
import { getQueryClient } from '../../test-utils/react-query';
import { handlers } from '../mocks/handlers';
import { AddReview } from './AddReview';

describe('AddReview', () => {
  setupMockServer(...handlers);

  let firstMovie;
  beforeAll(async () => {
    const moviesResponse = await MoviesApi.getMovies();
    // Making this call with the handler will populate the "details" object.
    const firstMovieResponse = await MoviesApi.getMovie(moviesResponse[0].id);

    firstMovie = firstMovieResponse;
  });

  function renderComponent() {
    const queryClient = getQueryClient();
    const Wrapper = ({ children }) => (
      <MemoryRouter>
        <TestWrapper queryClient={queryClient} children={children} />
      </MemoryRouter>
    );

    return render(<AddReview author="Mock Author" movieId={firstMovie.info.id} />, {
      wrapper: Wrapper,
    });
  }

  afterEach(() => {
    vi.restoreAllMocks();
  });

  test('can render the component', () => {
    renderComponent();

    expect(screen.getByText(/Write a review/)).toBeDefined();
  });

  test('should submit a review when filling the textarea and clicking on the submit button', async () => {
    renderComponent();
    const user = userEvent.setup();
    // If there would be more than a test using this spy, we could run into issues
    // because tests run in parallel.
    const spySubmitMovieReview = vi.spyOn(MoviesApi, 'submitMovieReview');

    const textarea = screen.getByRole('textbox');
    expect(textarea).toBeDefined();
    await user.type(textarea, 'This is a mock review');

    const submitBtn = screen.getByRole('button', { name: /submit/i });
    await user.click(submitBtn);
    expect(spySubmitMovieReview).toHaveBeenCalledWith({
      author: 'Mock Author',
      content: 'This is a mock review',
      movieId: firstMovie.info.id,
    });
  });
});
