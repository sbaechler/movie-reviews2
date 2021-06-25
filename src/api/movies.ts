import ky from 'ky';


export async function getMovies() {
    return ky.get('/movies').json();
}

export async function getMovie(id: string) {
  return ky.get(`/movies/${id}`).json();
}

type MoviePayload = {
  movieId: string,
  content: string,
  author: string,
  publication_date: string,
}

export async function submitMovieReview(payload: MoviePayload) {
  return ky.post(`/reviews/${payload.movieId}`, {
    body: JSON.stringify(payload)
  })
}
