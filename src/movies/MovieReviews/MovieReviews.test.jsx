import { render, screen, within } from '@testing-library/react';
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

  function renderComponent(customReviews) {
    const queryClient = getQueryClient();
    const Wrapper = ({ children }) => (
      <MemoryRouter>
        <TestWrapper queryClient={queryClient} children={children} />
      </MemoryRouter>
    );

    return render(
      <MovieReviews movieId={firstMovie.info.id} reviews={customReviews ?? firstMovie.reviews} />,
      {
        wrapper: Wrapper,
      },
    );
  }

  test('can render the component', () => {
    renderComponent();

    expect(screen.getByText('Reviews')).toBeDefined();
  });

  test('should render correctly the date of a review if it is not right now', () => {
    renderComponent();

    const firstReview = screen.getAllByTestId('review-list-item')[0];
    const expectedDateString = new Date(firstReview.updated_at).toLocaleDateString();

    expect(within(firstReview).getByRole('heading', expectedDateString)).toBeDefined();
  });

  test('should render "just now" instead of the date of of a review, when the review has a nullish `updated_at` attribute', () => {
    const reviewsWithFirstWithoutDate = firstMovie.reviews.map((review, index) => {
      if (index !== 0) {
        return review;
      }

      return {
        ...review,
        updated_at: undefined,
      };
    });

    renderComponent(reviewsWithFirstWithoutDate);

    const firstReview = screen.getAllByTestId('review-list-item')[0];

    expect(within(firstReview).getByRole('heading', { name: /just now/i })).toBeDefined();
  });
});
