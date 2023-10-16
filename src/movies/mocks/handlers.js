import {rest} from 'msw'

const details = {}

export const handlers = [
  rest.get('/movies', async (req, res, ctx) => {
    const data = await import('./data/movies/GET.json')

    return res(
      ctx.json(data.results),
    )
  }),
  rest.get('/movies/:id', async (req, res, ctx) => {
    if (!details[req.params.id]) {
      details[req.params.id] = await import(`./data/movies/${req.params.id}/GET.json`);
    }

    return res(ctx.json(details[req.params.id]))
  }),
  rest.post('/reviews/:id', (req, res, ctx) => {
    details[req.params.id].reviews?.unshift(req.json())

    return res(ctx.json(details[req.params.id]))
  }),
  rest.get('https://image.tmdb.org/*', () => null),
]
