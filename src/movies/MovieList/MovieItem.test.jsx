import { render, screen } from "@testing-library/react";
import React from "react";
import { MemoryRouter } from "react-router-dom";
import { describe, expect, test } from "vitest";
import { TestWrapper } from "../../test-utils/TestWrapper";
import { MovieItem } from "./MovieItem";

const mockMovie = {
  id: "mock-id",
  title: "mock-title",
  poster_path: "mock-poster_path",
};

describe("MovieItem", () => {
  function renderComponent() {
    const Wrapper = ({ children }) => (
      <MemoryRouter>
        <TestWrapper children={children} />
      </MemoryRouter>
    );

    return render(<MovieItem movie={mockMovie} />, { wrapper: Wrapper });
  }

  test("can render the component", async () => {
    renderComponent();

    expect(screen.getByText("mock-title")).toBeDefined();
  });

  test.todo(
    "navigates to the movie details page when clicking on a movie item",
    () => {}
  );
});
