/* eslint-disable no-await-in-loop */
/* eslint-disable no-restricted-syntax */
import Recipe from '../model/Recipe';
import GiphyRepository from '../repositories/GiphyRepository';
import RecipePuppyRepository from '../repositories/RecipePuppyRepository';

class RecipesController {
  async search(keywords: string[]): Promise<Recipe[] | null> {
    const giphyHelper = new GiphyRepository();

    const recipePuppyHelper = new RecipePuppyRepository();
    const recipesPuppy = await recipePuppyHelper.search(keywords);
    if (!recipesPuppy) {
      return null;
    }
    const recipes: Recipe[] = [];

    for (const element of recipesPuppy) {
      const gif = await giphyHelper.search(element.title);
      if (!gif) {
        return null;
      }
      const recipe = new Recipe(
        element.title,
        element.ingredients.split(', ').sort(),
        element.href,
        gif,
      );
      recipes.push(recipe);
    }

    return recipes;
  }
}

export default RecipesController;
