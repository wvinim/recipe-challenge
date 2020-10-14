import axios from 'axios';
import dotenv from 'dotenv';

dotenv.config();

class GiphyRepository {
  public async search(title: string): Promise<string> {
    const url = `${process.env.GIPHY_URL}/v1/gifs/search`;

    return axios
      .get(url, {
        params: {
          q: title,
          limit: 1,
          api_key: `${process.env.GIPHY_KEY}`,
        },
      })
      .then(response => {
        return response.data.data[0].url;
      })
      .catch(error => {
        console.log(`Ops... An error occurs. ${error}`);
      });
  }
}

export default GiphyRepository;
