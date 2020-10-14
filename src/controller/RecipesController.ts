import Recipe from '../model/Recipe';

class RecipesController {
  async search(keywords: string[]): Promise<Recipe[] | null> {
    // const giphyHelper = new GiphyRepository();
    // const gif = await giphyHelper.search('well done');

    // const recipePuppyHelper = new RecipePuppyRepository();
    // const recipesPuppy = await recipePuppyHelper.search(keywords);
    const recipes: Recipe[] = [];

    // return response.json(recipes);
    return recipes;
  }
}

export default RecipesController;
