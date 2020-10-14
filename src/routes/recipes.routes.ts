import { Router } from 'express';
import GiphyRepository from '../repositories/GiphyRepository';

const recipesRouter = Router();

/** Recipes endpoint */
recipesRouter.get('/', async (request, response) => {
  const giphyHelper = new GiphyRepository();
  const gif = await giphyHelper.search('well done');
  return response.json(gif);
});

export default recipesRouter;
