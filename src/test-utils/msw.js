import { setupServer } from "msw/node";
import { beforeAll, afterEach, afterAll } from "vitest";

/**
 * Test helper for using msw.
 * Sets up a mock server and tears it down after the tests.
 * The handlers are reset after each test.
 * @returns The mock server instance.
 */
export function setupMockServer(...mocks) {
  const server = setupServer(...mocks);

  beforeAll(() => {
    server.listen({
      onUnhandledRequest: "error",
    });
  });

  afterEach(() => {
    server.resetHandlers();
  });

  afterAll(() => {
    server.close();
  });

  return server;
}
