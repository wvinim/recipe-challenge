import { Router } from 'express';
import RecipeController from '../controller/RecipesController';

const recipesRouter = Router();

/** Recipes endpoint */
recipesRouter.get('/', async (request, response) => {
  const recipeController = new RecipeController();
  let params: string[] = [];

  /** Making params by request */
  if ('i' in request.query) {
    params = request.query.i.toString().split(',');
  }

  /** Check params */
  if (params.length < 1) {
    response.status(400).json({
      error: '400 BAD REQUEST: Please, verify your ingredients.',
    });
  }

  /** Check max params */
  if (params.length > 3) {
    response.status(400).json({
      error:
        '400 BAD REQUEST: Number of ingredients cannot be greater than three.',
    });
  }

  /** Call main search controller */
  const recipeList = await recipeController.search(params);

  /** Service unavailable */
  if (!recipeList) {
    response.status(400).json({
      error: 'Service unavailable',
    });
  }

  response.json(recipeList);
});

export default recipesRouter;
