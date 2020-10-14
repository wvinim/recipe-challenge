import axios from 'axios';
import dotenv from 'dotenv';

dotenv.config();

class RecipePuppyRepository {
  public async search(ingredients: string[]): Promise<string> {
    const url = `${process.env.RECIPES_URL}/api/`;

    return axios
      .get(url, {
        params: {
          i: ingredients.join(', '),
        },
      })
      .then(response => {
        return response.data.results;
      })
      .catch(error => {
        console.log(`Ops... An error occurs. ${error}`);
      });
  }
}

export default RecipePuppyRepository;
