import axios from 'axios';
import dotenv from 'dotenv';

dotenv.config();

class GiphyRepository {
  public async search(title: string): Promise<string> {
    const url = `${process.env.GIPHY_URL}/v1/gifs/search`;

    return new Promise((resolve, reject) => {
      axios
        .get(url, {
          params: {
            q: title,
            limit: 1,
            api_key: `${process.env.GIPHY_KEY}`,
          },
        })
        .then(response => {
          resolve(response.data.data[0].url);
        })
        .catch(err => {
          reject(`Giphy service unavailable: ${err.message}`);
        });
    });
  }
}

export default GiphyRepository;
