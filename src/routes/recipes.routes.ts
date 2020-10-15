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
      error: 'Please, verify your ingredients.',
    });
  }

  /** Check max params */
  if (params.length > 3) {
    response.status(400).json({
      error: 'Number of ingredients cannot be greater than three.',
    });
  }

  try {
    /** Call main search controller */
    const recipeList = await recipeController.search(params);
    response.json(recipeList);
  } catch (error) {
    response.status(400).json(error);
  }
});

export default recipesRouter;
