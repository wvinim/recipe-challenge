import axios from 'axios';
import dotenv from 'dotenv';
import RecipePuppy from '../model/RecipePuppy';

dotenv.config();

class RecipePuppyRepository {
  public async search(ingredients: string[]): Promise<RecipePuppy[]> {
    const url = `${process.env.RECIPES_URL}/api/`;

    return new Promise((resolve, reject) => {
      axios
        .get(url, {
          params: {
            i: ingredients.join(', '),
          },
        })
        .then(response => {
          resolve(response.data.results);
        })
        .catch(err => {
          reject(`Recipe Puppy service unavailable: ${err.message}`);
        });
    });
  }
}

export default RecipePuppyRepository;
