import { QueryClient } from "@tanstack/react-query";
import { afterEach } from "vitest";

/**
 * A version of the QueryClient with sensible defaults
 * for use with Vitest.
 */
export class TestQueryClient extends QueryClient {
  constructor() {
    super({
      defaultOptions: {
        queries: {
          cacheTime: Infinity,
          staleTime: 0,
          retry: false,
        },
        mutations: {
          retry: false,
        },
      },
    });
  }
}

/**
 * Instantiate a query client with sensible default options for testing.
 *
 * Clears the query cache after each test.
 * https://tanstack.com/query/v4/docs/guides/testing
 */
export function getQueryClient() {
  const queryClient = new TestQueryClient();

  afterEach(() => {
    queryClient.clear();
  });

  return queryClient;
}
