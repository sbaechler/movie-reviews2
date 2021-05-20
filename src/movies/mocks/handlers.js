import { rest } from 'msw'
import movies from './movies.json';
import starWars from './star-wars.json';

export const handlers = [
    rest.get('/movies', (req, res, ctx) => {
        return res(
            ctx.json(movies),
        )
    }),
    rest.get('/movies/:id', (req, res, ctx) => {
        return res(ctx.json(starWars))
    })
]
