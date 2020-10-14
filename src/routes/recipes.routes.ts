import { Router } from 'express';

const recipesRouter = Router();

/** Recipes endpoint */
recipesRouter.get('/', async (request, response) => {
  return response.json({ msg: 'recipes list' });
});

export default recipesRouter;
