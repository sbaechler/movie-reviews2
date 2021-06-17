import ky from 'ky';

export async function getMovies() {
    return ky.get('/movies').json();
}

interface MoviePayload {
  movieId: string,
  content: string,
  author: string,
  publication_date: string,
}

export async function submitMovieReview(payload: MoviePayload) {
  return ky.post(`/movies/${payload.movieId}/reviews`, {
    body: JSON.stringify(payload)
  })
}
