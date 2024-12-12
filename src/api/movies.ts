import ky from "ky";

/**
 * Fetches the movies list from the endpoint.
 */
export async function getMovies() {
  return ky.get(`${window.location.origin}/movies`).json();
}

/**
 * Fetches a single movie from the endpoint.
 * @param id - The ID of the movie.
 */
export async function getMovie(id: string) {
  await new Promise((resolve) => setTimeout(resolve, 600));
  return ky.get(`${window.location.origin}/movies/${id}`).json();
}

type MoviePayload = {
  movieId: string;
  content: string;
  author: string;
};

/**
 * Post a review to the backend.
 * @param payload{MoviePayload} - A review object.
 */
export async function submitMovieReview(payload: MoviePayload) {
  return ky.post(`${window.location.origin}/reviews/${payload.movieId}`, {
    body: JSON.stringify(payload),
    headers: {
      "Content-Type": "application/json",
    },
  });
}
