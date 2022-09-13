import {rest} from 'msw'
import movies from './movies.json';
import movie from './cruella.json';

export const handlers = [
  rest.get('/movies', (req, res, ctx) => {
    return res(
      ctx.json(movies),
    )
  }),
  rest.get('/movies/:id', (req, res, ctx) => {
    return res(ctx.json(movie))
  }),
  rest.post('/reviews/:id', (req, res, ctx) => {
    return res(ctx.text('OK'))
  }),
  rest.get('https://image.tmdb.org/*', () => null),
]
