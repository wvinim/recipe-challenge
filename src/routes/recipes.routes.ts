import { Router } from 'express';
import RecipeController from '../controller/RecipesController';

const recipesRouter = Router();

/** Recipes endpoint */
recipesRouter.get('/', async (request, response) => {
  const recipeController = new RecipeController();
  let params: string[] = [];

  if ('i' in request.query) {
    params = request.query.i.toString().split(',');
  }

  if (params.length > 3) {
    response.status(400).json({
      error:
        '400 BAD REQUEST: Number of ingredients cannot be greater than three.',
    });
  }

  const recipes = await recipeController.search(params);

  if (!recipes) {
    response.status(400).json({
      error: 'Service unavailable',
    });
  }

  await response.json(recipes);
});

export default recipesRouter;
