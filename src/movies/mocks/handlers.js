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
      const data = await import(`./data/movies/${req.params.id}/GET.json`);
      details[req.params.id] = {
        ...data,
        images: data.images.slice(0, 8),
      }
    }

    return res(ctx.json(details[req.params.id]))
  }),
  rest.post('/reviews/:id', async (req, res, ctx) => {
    const review = await req.json();

    details[req.params.id].reviews?.unshift({
      ...review,
      id: details[req.params.id].reviews.length + 1,
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString(),
    })

    return res(ctx.json(details[req.params.id]))
  }),
  rest.get('https://image.tmdb.org/*', (req) => req.passthrough()),
  rest.get('/src/*', (req) => req.passthrough()),
]
