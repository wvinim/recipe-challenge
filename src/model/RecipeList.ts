import Recipe from './Recipe';

class RecipeList {
  keywords: string[];

  recipes: Recipe[];

  constructor(keywords: string[], recipes: Recipe[]) {
    this.keywords = keywords;
    this.recipes = recipes;
  }
}

export default RecipeList;
