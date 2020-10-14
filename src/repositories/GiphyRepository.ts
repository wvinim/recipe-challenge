import axios from 'axios';
import dotenv from 'dotenv';

class GiphyRepository {
  public async search(title: string): Promise<string> {
    dotenv.config();
    const url = `${process.env.GIPHY_URL}/v1/gifs/search`;

    return axios(url, {
      params: {
        q: title,
        limit: 1,
        api_key: `${process.env.GIPHY_KEY}`,
      },
    })
      .then(response => {
        const gifUrl = response.data.data[0].url;

        return gifUrl;
      })
      .catch(error => {
        console.log(`Ops... An error occurs. ${error}`);
      });
  }
}

export default GiphyRepository;
