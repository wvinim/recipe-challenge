class Recipe {
  title: string;

  ingredients: string[];

  link: string;

  gif: string;

  constructor(title: string, ingredients: string[], link: string, gif: string) {
    this.title = title;
    this.ingredients = ingredients;
    this.link = link;
    this.gif = gif;
  }
}

export default Recipe;
