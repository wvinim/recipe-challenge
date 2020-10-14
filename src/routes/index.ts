import { Router } from 'express';
import RecipesRoutes from './recipes.routes';

const routes = Router();

/** Set recipes routes as middleware */
routes.use('/recipes', RecipesRoutes);

export default routes;
