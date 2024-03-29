import ky from 'ky';

/**
 * Fetches the movies list from the endpoint.
 */
export async function getMovies() {
    return ky.get('/movies').json();
}

/**
 * Fetches a single movie from the endpoint.
 * @param id - The ID of the movie.
 */
export async function getMovie(id: string) {
  return ky.get(`/movies/${id}`).json();
}

type MoviePayload = {
  movieId: string,
  content: string,
  author: string,
}

/**
 * Post a review to the backend.
 * @param payload{MoviePayload} - A review object.
 */
export async function submitMovieReview(payload: MoviePayload) {
  return ky.post(`/reviews/${payload.movieId}`, {
    body: JSON.stringify(payload)
  })
}
