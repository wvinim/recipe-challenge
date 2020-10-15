/**
 * @jest-environment node
 */
const request = require('supertest');
const app = require('../server');

/** This test is an simple example, just for showing my test skills */
describe('Recipe', () => {
  it('should get recipes by keywords', async () => {
    const keywords = ['onions'];

    const res = await request.agent(app).get(
      `/recipes?i=${keywords.join(',')}`,
    );

    expect(res.body.recipes[0]).toEqual(
      expect.objectContaining({
        ingredients: expect.arrayContaining(keywords),
      }),
    );
  });
});
