import {http, passthrough, HttpResponse} from 'msw'

const details = {}

export const handlers = [
  http.get('/movies', async () => {
    const data = await import('./data/movies/GET.json')

    return HttpResponse.json(data.results)
  }),
  http.get('/movies/:id', async ({ params}) => {
    if (!details[params.id]) {
      const data = await import(`./data/movies/${params.id}/GET.json`);
      details[params.id] = {
        ...data,
        images: data.images.slice(0, 8),
      }
    }

    return HttpResponse.json(details[params.id])
  }),
  http.post('/reviews/:id', async ({req, params}) => {
    const review = await req.json();

    details[params.id].reviews?.unshift({
      ...review,
      id: details[params.id].reviews.length + 1,
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString(),
    })

    return HttpResponse.json(details[params.id])
  }),
  http.get('https://image.tmdb.org/*', (() => passthrough())),
  http.get('/src/*', () => passthrough()),
]
