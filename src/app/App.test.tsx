import { render, screen } from '@testing-library/react';
import React, { ReactNode } from 'react';
import { describe, expect, test } from 'vitest';
import { App } from './App';
import { TestWrapper } from '../test-utils/TestWrapper';
import { getQueryClient } from '../test-utils/react-query';

describe('App', () => {
  function renderComponent() {
    const queryClient = getQueryClient();
    const Wrapper = ({ children }: { children: ReactNode }) => (
      <TestWrapper queryClient={queryClient} children={children} />
    );

    return render(<App />, { wrapper: Wrapper });
  }

  test('can render the component', () => {
    renderComponent();

    expect(
      screen.getByText('This product uses the TMDb API but is not endorsed or certified by TMDb.'),
    ).toBeDefined();
  });
});
