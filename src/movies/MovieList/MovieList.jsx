import React from 'react';

/**
 * This component shows a list of all movies. It is also
 * responsible for fetching the data from the API.
 */
export function MovieList() {
  const isLoading = false;  // TODO: Remove

  if(isLoading) {
    return <div className="p-1">Loading...</div>
  }

  return (
    <div className="p-1">
      <header>
        <h1 className="mb-2 text-3xl">Recent Movies</h1>
      </header>
      <main>
        <div className="grid grid-flow-row auto-rows-auto grid-cols-4 gap-x-1	gap-y-1.5">
        Add Movies here
        </div>
      </main>
    </div>
  );
}
