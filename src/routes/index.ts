import { Router } from 'express';
import RecipesRoutes from './recipes.routes';

const routes = Router();

/**  */
routes.use('/recipes', RecipesRoutes);

export default routes;
