import { QueryClientProvider } from "@tanstack/react-query";
import React from "react";
import { TestQueryClient } from "./react-query";

/**
 * Test Wrapper contains commonly used wrappers for testing.
 */
export function TestWrapper({ children, queryClient }) {
  const queryClientToUse = queryClient ?? new TestQueryClient();

  return (
    <QueryClientProvider client={queryClientToUse}>
      {children}
    </QueryClientProvider>
  );
}
