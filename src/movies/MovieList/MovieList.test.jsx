import { render, screen } from "@testing-library/react";
import React from "react";
import { MemoryRouter } from "react-router-dom";
import { describe, expect, test } from "vitest";
import { TestWrapper } from "../../test-utils/TestWrapper";
import { setupMockServer } from "../../test-utils/msw";
import { getQueryClient } from "../../test-utils/react-query";
import { handlers } from "../mocks/handlers";
import { MovieList } from "./MovieList";

describe("MovieList", () => {
  setupMockServer(...handlers);

  function renderComponent() {
    const queryClient = getQueryClient();
    const Wrapper = ({ children }) => (
      <MemoryRouter>
        <TestWrapper queryClient={queryClient} children={children} />
      </MemoryRouter>
    );

    return render(<MovieList />, { wrapper: Wrapper });
  }

  test("can render the component", () => {
    renderComponent();

    expect(screen.getByText("Loading...")).toBeDefined();
  });

  test("should render the movie list when it's done with loading the movies data", async () => {
    renderComponent();

    expect(screen.getByText("Loading...")).toBeDefined();

    const heading = await screen.findByRole("heading", {
      name: /Recent Movies/g,
    });
    expect(heading).toBeDefined();
  });
});
