/* eslint-disable no-await-in-loop */
/* eslint-disable no-restricted-syntax */
import Recipe from '../model/Recipe';
import RecipeList from '../model/RecipeList';
import GiphyRepository from '../repositories/GiphyRepository';
import RecipePuppyRepository from '../repositories/RecipePuppyRepository';

class RecipesController {
  async search(keywords: string[]): Promise<RecipeList> {
    const giphyHelper = new GiphyRepository();
    const recipePuppyHelper = new RecipePuppyRepository();

    /** Get recipespuppy data */
    const recipesPuppy = await recipePuppyHelper.search(keywords);

    const recipes: Recipe[] = [];

    for (const element of recipesPuppy) {
      /** Get giphy url */
      const gif = await giphyHelper.search(element.title);

      /** Make recipe object */
      const recipe = new Recipe(
        element.title,
        element.ingredients.split(', ').sort(),
        element.href,
        gif,
      );
      recipes.push(recipe);
    }

    const recipeList = new RecipeList(keywords, recipes);

    return recipeList;
  }
}

export default RecipesController;
