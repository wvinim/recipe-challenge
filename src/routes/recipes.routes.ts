import { Router } from 'express';
import GiphyRepository from '../repositories/GiphyRepository';
import RecipePuppyRepository from '../repositories/RecipePuppyRepository';

const recipesRouter = Router();

/** Recipes endpoint */
recipesRouter.get('/', async (request, response) => {
  const giphyHelper = new GiphyRepository();
  const gif = await giphyHelper.search('well done');

  const recipePuppyHelper = new RecipePuppyRepository();
  const recipes = await recipePuppyHelper.search(['onions', 'butter']);

  return response.json(recipes);
});

export default recipesRouter;
