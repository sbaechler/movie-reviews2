import { render, screen } from "@testing-library/react";
import React from "react";
import { MemoryRouter, Routes, Route } from "react-router-dom";
import { describe, expect, test } from "vitest";
import { getMovie, getMovies } from "../../api/movies";
import { TestWrapper } from "../../test-utils/TestWrapper";
import { setupMockServer } from "../../test-utils/msw";
import { getQueryClient } from "../../test-utils/react-query";
import { handlers } from "../mocks/handlers";
import { MovieDetail } from "./MovieDetail";

describe("MovieDetail", () => {
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
      <TestWrapper queryClient={queryClient} children={children} />
    );

    return render(
      <MemoryRouter initialEntries={[`/movies/${firstMovie.info.id}`]}>
        <Routes>
          <Route path="/movies/:id" element={<MovieDetail />} />
        </Routes>
      </MemoryRouter>,
      { wrapper: Wrapper }
    );
  }

  test("can render the component", () => {
    renderComponent();

    expect(screen.getByText("Loading...")).toBeDefined();
  });

  test("should render the details when it's done with loading the movie data", async () => {
    renderComponent();

    expect(screen.getByText("Loading...")).toBeDefined();

    const overview = await screen.findByText(
      firstMovie.info.overview
    );
    expect(overview).toBeDefined();
  });

  test("should render the images when it's done with loading the movie data", async () => {
    renderComponent();

    expect(screen.getByText("Loading...")).toBeDefined();

    const heading = await screen.findByRole("heading", {
      name: /Images/g,
    });
    expect(heading).toBeDefined();

    const imagesList = screen.getByTestId("images-list");
    expect(imagesList).toBeDefined();
    expect(imagesList.children).toHaveLength(firstMovie.images?.length ?? 0);
  });
});
